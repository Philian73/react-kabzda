import { FC, memo } from 'react'

type ItemType = {
  title: string
  value: any
}

type PropsType = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
  items: ItemType[]
  onClick: (value: any) => void
}
export const Accordion: FC<PropsType> = memo(
  ({ titleValue, collapsed, onChange, items, onClick }) => {
    console.log('Accordion rendering')

    return (
      <div>
        <AccordionTitle title={titleValue} onChange={onChange} />
        {!collapsed && <AccordionBody items={items} onClick={onClick} />}
      </div>
    )
  }
)

type AccordionTitlePropsType = {
  title: string
  onChange: () => void
}
const AccordionTitle: FC<AccordionTitlePropsType> = memo(({ title, onChange }) => {
  console.log('AccordionTitle rendering')

  return <h3 onClick={() => onChange()}>{title}</h3>
})

type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
}
const AccordionBody: FC<AccordionBodyPropsType> = memo(({ items, onClick }) => {
  console.log('AccordionBody rendering')

  const itemsMap = items.map((item, index) => {
    const onClickHandler = () => onClick(item.value)

    return (
      <li onClick={onClickHandler} key={index}>
        {item.title}
      </li>
    )
  })

  return <ul>{itemsMap}</ul>
})
