import { FC, memo, useEffect, useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Counter> = {
  title: 'test/useEffect demo',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

type CounterPropsType = {
  count: number
}
const Counter: FC<CounterPropsType> = memo(({ count }) => {
  return <div>{count}</div>
})

export const SimpleExample: Story = {
  render: () => {
    console.log('SimpleExample')

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
      console.log('useEffect every render')

      document.title = counter.toString()
    })
    useEffect(() => {
      console.log('useEffect only first render (componentDidMount)')

      document.title = counter.toString()
    }, [])
    useEffect(() => {
      console.log('useEffect first render and every counter change')

      document.title = counter.toString()
    }, [counter])

    const incrementFake = () => setFake(fake + 1)
    const incrementCounter = () => setCounter(counter + 1)

    return (
      <>
        <button onClick={incrementFake}>fake+</button>
        <Counter count={fake} />
        <button onClick={incrementCounter}>counter+</button>
        <Counter count={counter} />
      </>
    )
  },
}

export const SetTimeoutExample: Story = {
  render: () => {
    console.log('SimpleExample')

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
      setInterval(() => {
        setCounter(prevState => prevState + 1)
      }, 1000)
    }, [])

    const incrementFake = () => setFake(fake + 1)
    const incrementCounter = () => setCounter(counter + 1)

    return (
      <>
        <button onClick={incrementFake}>fake+</button>
        <Counter count={fake} />
        <button onClick={incrementCounter}>counter+</button>
        <Counter count={counter} />
      </>
    )
  },
}
