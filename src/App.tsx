import { useState } from 'react'

import './styles/App.css'

import { Accordion } from './components/Accordion/Accordion.tsx'
import { Rating, RatingValueType } from './components/Rating/Rating.tsx'
import { Select } from './components/Select/Select.tsx'
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion.tsx'
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOff.tsx'
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating.tsx'

export type ItemType = {
  title: string
  value: any
}

const items: ItemType[] = [
  { title: 'Kolya', value: '1' },
  { title: 'Nikita', value: '2' },
  { title: 'Darya', value: '3' },
  { title: 'Maxim', value: '4' },
]

const App = () => {
  console.log('App rendering')

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  const [switchOn, setSwitchOn] = useState<boolean>(false)
  const [selectValue, setSelectValue] = useState('')

  return (
    <div className="App">
      <Rating value={ratingValue} onClick={setRatingValue} />
      <UncontrolledRating onChange={setRatingValue} />
      <Accordion
        titleValue="Menu"
        collapsed={accordionCollapsed}
        items={items}
        onClick={x => x}
        onChange={() => setAccordionCollapsed(!accordionCollapsed)}
      />
      <UncontrolledAccordion>---Menu 2---</UncontrolledAccordion>
      {/*<OnOff on={switchOn} onChange={setSwitchOn} />*/}
      <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}
      <Select value={selectValue} onChange={setSelectValue} items={items} />
    </div>
  )
}

export default App
