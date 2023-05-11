import { FC, memo, useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Counter | typeof Users> = {
  title: 'test/React.memo demo',
  tags: ['autodocs'],
}

type CounterPropsType = {
  count: number
}
const Counter: FC<CounterPropsType> = memo(({ count }) => {
  return <div>{count}</div>
})

type UsersPropsType = {
  users: string[]
}
const Users: FC<UsersPropsType> = memo(({ users }) => {
  console.log('USERS')

  return (
    <div>
      {users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  )
})

export default meta
type Story = StoryObj<typeof meta>

export const Example1: Story = {
  render: () => {
    console.log('Example1')

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState<string[]>(['Kolya', 'Nikita', 'Darya', 'Maxim'])

    const incrementCounter = () => setCounter(prev => prev + 1)
    const addUser = () => {
      setUsers([...users, `Philian ${new Date().getTime()}`])
    }

    return (
      <>
        <button onClick={incrementCounter}>+</button>
        <button onClick={addUser}>Add user</button>
        <Counter count={counter} />
        <Users users={users} />
      </>
    )
  },
}
