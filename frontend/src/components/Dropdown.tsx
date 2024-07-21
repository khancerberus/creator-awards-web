import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

interface DropdownProps {
  value?: string[]
  options: string[]
  multiple?: boolean
  onChange?: (selectedOptions: string[]) => void
  className?: string
}

export const Dropdown = ({ value, options, multiple, onChange, className, ...props }: DropdownProps): JSX.Element => {
  const dropdownClassNames = classNames('relative flex bg-green-800', className)
  const optionsRef = useRef<HTMLDivElement>(null)
  const selectRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleOnChangeCallBack = (newSelectedOptions: string[]) => {
    onChange?.(newSelectedOptions)
  }

  const handleOptionClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    const selectedOption = event.currentTarget.textContent
    const isSelected = selectedOptions.includes(selectedOption ?? '')
    if (multiple) {
      const newOptions = isSelected
        ? selectedOptions.filter((option) => option !== selectedOption)
        : [...selectedOptions, selectedOption ?? '']
      setSelectedOptions(newOptions)
      handleOnChangeCallBack(newOptions)
    } else {
      const newOptions = [selectedOption ?? '']
      setSelectedOptions(newOptions)
      handleOnChangeCallBack(newOptions)
    }
    if (!multiple) setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node) &&
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    })

    return (): void => {
      document.removeEventListener('mousedown', () => {
        setIsOpen(false)
      })
    }
  }, [optionsRef])

  useEffect(() => {
    if (value) {
      setSelectedOptions(value)
    }
  }, [value])

  return (
    <div className={dropdownClassNames} {...props}>
      <div
        ref={selectRef}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        className={
          isOpen
            ? 'min-w-48 max-w-48 cursor-pointer text-nowrap px-2 py-1 outline outline-2 outline-white'
            : 'min-w-48 max-w-48 cursor-pointer text-nowrap px-2 py-1'
        }
        style={{
          userSelect: 'none',
          textOverflow: 'ellipsis',
          overflow: 'clip'
        }}
      >
        {selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Select an option'}
      </div>

      <CSSTransition
        nodeRef={optionsRef}
        in={isOpen}
        timeout={400}
        classNames="options-transition"
        unmountOnExit
      >
        <div
          ref={optionsRef}
          className="absolute top-9 z-20 max-h-48 w-full overflow-auto bg-red-500 p-1 shadow-sm"
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={handleOptionClick}
              className={
                selectedOptions.includes(option)
                  ? 'cursor-pointer bg-blue-600 hover:bg-slate-700'
                  : 'cursor-pointer hover:bg-slate-700'
              }
              style={{
                userSelect: 'none'
              }}
            >
              <input type="checkbox" checked={selectedOptions.includes(option)} />
              {option}
            </div>
          ))}
        </div>
      </CSSTransition>
    </div>
  )
}
