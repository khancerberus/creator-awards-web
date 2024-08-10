import { useState } from 'react'

interface CellProps {
  label: string
  value: number
}

const eventDate = new Date('2025-01-15').getTime()

const Cell = ({ label, value }: CellProps) => (
  <div className="flex w-40 flex-col items-center rounded-lg bg-gradient-to-b from-[#5A3F66] to-transparent py-4">
    <h1 className="font-bold">{value}</h1>
    <span>{label}</span>
  </div>
)

const calculateTimeLeft = () => {
  const difference = eventDate - new Date().getTime()
  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      Dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      Minutos: Math.floor((difference / 1000 / 60) % 60),
      Segundos: Math.floor((difference / 1000) % 60)
    }
  }

  return timeLeft
}

export const Countdown = (): React.ReactNode => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  setTimeout(() => {
    setTimeLeft(calculateTimeLeft())
  }, 1000)

  return (
    <div className="flex gap-4">
      {(Object.entries(timeLeft) as [string, number][]).map(([label, value], index) => (
        <Cell key={index} label={label} value={value} />
      ))}
    </div>
  )
}
