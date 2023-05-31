import { FC, memo, useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Counter> = {
  title: 'test/useState demo',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const generateData = () => {
  console.log('generateData')

  // imitate a complex calculation
  return 1
}

type CounterPropsType = {
  count: number
}
const Counter: FC<CounterPropsType> = memo(({ count }) => {
  return <div>{count}</div>
})

export const Example1: Story = {
  render: () => {
    console.log('Example1')

    const [counter, setCounter] = useState(generateData)

    const incrementCounter = () => setCounter(prevState => prevState + 1)

    return (
      <>
        <button onClick={incrementCounter}>+</button>
        <Counter count={counter} />
      </>
    )
  },
}
