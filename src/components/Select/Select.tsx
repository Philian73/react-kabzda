import { FC, KeyboardEvent, useEffect, useState } from 'react'

import s from './Select.module.css'

type ItemType = {
  title: string
  value: any
}

type PropsType = {
  value?: any
  onChange: (value: any) => void
  items: ItemType[]
}
export const Select: FC<PropsType> = ({ value, onChange, items }) => {
  console.log('Select rendering')

  const [active, setActive] = useState(false)
  const [hoveredItemValue, setHoveredItemValue] = useState(value)

  useEffect(() => {
    setHoveredItemValue(value)
  }, [value])

  const toggleItems = () => setActive(!active)

  const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i < items.length; i++) {
        if (items[i].value === hoveredItemValue) {
          const challengerElement = e.key === 'ArrowDown' ? items[i + 1] : items[i - 1]

          challengerElement && onChange(challengerElement.value)

          return
        }
      }
      !selectedItem && onChange(items[0].value)
    }
    if (e.key === 'Enter' || e.key === 'Escape') {
      setActive(false)
    }
  }

  const selectedItem = items.find(item => item.value === value)
  const hoveredItem = items.find(item => item.value === hoveredItemValue)

  const itemsMap = items.map(item => {
    const onClickHandler = () => {
      onChange(item.value)
      toggleItems()
    }
    const onMouseEnterHandler = () => setHoveredItemValue(item.value)

    return (
      <div
        key={item.value}
        className={`${s.item} ${hoveredItem === item ? s.selected : ''}`}
        onClick={onClickHandler}
        onMouseEnter={onMouseEnterHandler}
      >
        {item.title}
      </div>
    )
  })

  return (
    <>
      <div
        tabIndex={0}
        onBlur={() => setActive(false)}
        className={s.select}
        onKeyDown={onKeyDownHandler}
      >
        <span className={s.main} onClick={toggleItems}>
          {selectedItem?.title}
        </span>
        {active && <div className={s.items}>{itemsMap}</div>}
      </div>
    </>
  )
}
