import { useState } from 'react'

import './styles/App.css'

import { Accordion } from './components/Accordion/Accordion.tsx'
import { Rating, RatingValueType } from './components/Rating/Rating.tsx'
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion.tsx'
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOff.tsx'
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating.tsx'

const App = () => {
  console.log('App rendering')

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  const [switchOn, setSwitchOn] = useState<boolean>(false)

  return (
    <div className="App">
      <Rating value={ratingValue} onClick={setRatingValue} />
      <UncontrolledRating onChange={setRatingValue}/>
      <Accordion
        titleValue="Menu"
        collapsed={accordionCollapsed}
        onChange={() => setAccordionCollapsed(!accordionCollapsed)}
      />
      <UncontrolledAccordion>Menu 2</UncontrolledAccordion>
      {/*<OnOff on={switchOn} onChange={setSwitchOn} />*/}
      <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}
    </div>
  )
}

export default App
