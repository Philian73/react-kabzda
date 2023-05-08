import { FC } from 'react'

type PropsType = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
}
export const Accordion: FC<PropsType> = ({ titleValue, collapsed, onChange }) => {
  console.log('Accordion rendering')

  return (
    <div>
      <AccordionTitle title={titleValue} onChange={onChange} />
      {!collapsed && <AccordionBody />}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  onChange: () => void
}
const AccordionTitle: FC<AccordionTitlePropsType> = ({ title, onChange }) => {
  console.log('AccordionTitle rendering')

  return <h3 onClick={onChange}>{title}</h3>
}

const AccordionBody = () => {
  console.log('AccordionBody rendering')

  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
