import { FC, useEffect, useState } from 'react'

import clockFace from '../../assets/clock/clock.png'
import reactImg from '../../assets/clock/react.png'

import cls from './Clock.module.css'

type PropsType = {
  type?: 'arrow'
}
export const Clock: FC<PropsType> = ({ type }) => {
  console.log('Clock rendering')

  const [date, setDate] = useState<Date>(new Date())

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalID)
    }
  }, [])

  const dateTime = date.toISOString().slice(0, 16)
  const time = date.toLocaleTimeString()

  const DEG = 6
  const hh = date.getHours() * 30
  const mm = date.getMinutes() * DEG
  const ss = date.getSeconds() * DEG

  const clockBackgroundStyles = {
    background: `url(${clockFace}), url(${reactImg}), radial-gradient(circle, rgb(37, 73, 90) 0%, rgb(25, 48, 60) 11%, rgba(9, 25, 33, 1) 38%)`,
    backgroundSize: 'cover',
  }
  const hourArrowClockStyles = {
    transform: `rotateZ(${hh + mm / 12}deg)`,
  }
  const minuteArrowClockStyles = {
    transform: `rotateZ(${mm}deg)`,
  }
  const secondArrowClockStyles = {
    transform: `rotateZ(${ss}deg)`,
  }

  return !type ? (
    <time dateTime={dateTime}>{time}</time>
  ) : (
    <time dateTime={dateTime} className={cls.clock} style={clockBackgroundStyles}>
      <span className={cls.hour}>
        <span className={cls.hr} style={hourArrowClockStyles}></span>
      </span>
      <span className={cls.minute}>
        <span className={cls.mn} style={minuteArrowClockStyles}></span>
      </span>
      <span className={cls.second}>
        <span className={cls.sc} style={secondArrowClockStyles}></span>
      </span>
    </time>
  )
}
