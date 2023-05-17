import { FC, KeyboardEvent, memo, useEffect, useState } from 'react'

import { ItemType } from '../../App.tsx'

import s from './Select.module.css'

type PropsType = {
  value: any
  items: ItemType[]
}
export const Select: FC<PropsType> = memo(({ value, items }) => {
  console.log('Select rendering')

  const [active, setActive] = useState(false)
  const [hoveredItemValue, setHoveredItemValue] = useState(value)

  useEffect(() => {
    setHoveredItemValue(hoveredItemValue)
  }, [hoveredItemValue])

  const toggleItems = () => setActive(!active)

  const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === hoveredItemValue) {
          const challengerElement = e.key === 'ArrowDown' ? items[i + 1] : items[i - 1]

          challengerElement && setHoveredItemValue(challengerElement.id)

          return
        }
      }
      !selectedItem && setHoveredItemValue(items[0].id)
    }
    if (e.key === 'Enter' || e.key === 'Escape') {
      setActive(false)
    }
  }

  const selectedItem = items.find(item => item.id === hoveredItemValue)
  const hoveredItem = items.find(item => item.id === hoveredItemValue)

  const itemsMap = items.map(item => {
    const onClickHandler = () => {
      setHoveredItemValue(item.id)
      toggleItems()
    }
    const onMouseEnterHandler = () => setHoveredItemValue(item.id)

    return (
      <div
        key={item.id}
        className={`${s.item} ${hoveredItem === item ? s.selected : ''}`}
        onClick={onClickHandler}
        onMouseEnter={onMouseEnterHandler}
      >
        {item.city}
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
          {selectedItem?.city}
        </span>
        {active && <div className={s.items}>{itemsMap}</div>}
      </div>
    </>
  )
})
