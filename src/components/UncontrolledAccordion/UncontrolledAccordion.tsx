import { FC, memo, useReducer } from 'react'

import { changeModeMenuAC, reducer } from './reducer.ts'

type PropsType = {
  children: string
}
export const UncontrolledAccordion: FC<PropsType> = memo(({ children }) => {
  console.log('UncontrolledAccordion rendering')

  // const [collapsed, setCollapsed] = useState<boolean>(false)
  const [state, dispatch] = useReducer(reducer, { collapsed: false })

  return (
    <div>
      <AccordionTitle title={children} onClick={() => dispatch(changeModeMenuAC())} />
      {!state.collapsed && <AccordionBody />}
    </div>
  )
})

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}
const AccordionTitle: FC<AccordionTitlePropsType> = memo(({ title, onClick }) => {
  console.log('AccordionTitle rendering')

  return <h3 onClick={onClick}>{title}</h3>
})

const AccordionBody = memo(() => {
  console.log('AccordionBody rendering')

  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
})
