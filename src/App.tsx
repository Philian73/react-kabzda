import { useState } from 'react'

import './styles/App.css'

import { Accordion } from './components/Accordion/Accordion.tsx'
import { Rating, RatingValueType } from './components/Rating/Rating.tsx'
import { Select } from './components/Select/Select.tsx'
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion.tsx'
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOff.tsx'
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating.tsx'

export type ItemType = {
  id: string
  country: string
  city: string
  population: number
}

const items: ItemType[] = [
  { id: '1', country: 'Russia', city: 'Moscow', population: 12000000 },
  { id: '2', country: 'Russia', city: 'Saint Petersburg', population: 617000 },
  { id: '3', country: 'Russia', city: 'Ulyanovsk', population: 617000 },
  { id: '4', country: 'Belarus', city: 'Minsk', population: 1921000 },
  { id: '5', country: 'Belarus', city: 'Gomel', population: 526000 },
  { id: '6', country: 'Belarus', city: 'Mogilev', population: 374644 },
]

const App = () => {
  console.log('App rendering')

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  const [switchOn, setSwitchOn] = useState<boolean>(false)

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
      <Select value={'1'} items={items} />
    </div>
  )
}

export default App
