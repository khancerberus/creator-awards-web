import { useState } from 'react';





interface CellProps {
  label: string
  value: number
}

const eventDate = new Date('2025-01-15').getTime()

const Cell = ({ label, value }: CellProps): React.ReactNode => (
  <div className="border-[#5A3F66] flex w-48 flex-col items-center gap-[10px] rounded-lg border bg-gradient-to-b from-[#5A3F66] to-transparent p-[5px]">
    <h1 className="font-bold">{value}</h1>
    <h5 className="font-medium">{label}</h5>
  </div>
)

const calculateTimeLeft = (): object => {
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
    <div className="flex gap-[50px]">
      {(Object.entries(timeLeft) as [string, number][]).map(([label, value], index) => (
        <Cell key={index} label={label} value={value} />
      ))}
    </div>
  )
}