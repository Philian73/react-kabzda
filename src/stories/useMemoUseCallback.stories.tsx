import { FC, memo, useCallback, useMemo, useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<any> = {
  title: 'test/useMemo and useCallback demo',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

type UsersPropsType = {
  users: string[]
}
const Users: FC<UsersPropsType> = memo(({ users }) => {
  console.log('USERS')
  const usersMap = users.map((u, i) => <div key={i}>{u}</div>)

  return <div>{usersMap}</div>
})

type BooksPropsType = {
  books: string[]
  addBook: () => void
}
const Books: FC<BooksPropsType> = memo(({ books, addBook }) => {
  console.log('BOOKS')
  const usersMap = books.map((book, index) => <div key={index}>{book}</div>)

  return (
    <div>
      <button onClick={addBook}>add book</button>
      <div>{usersMap}</div>
    </div>
  )
})

export const DifficultCountingExample: Story = {
  render: () => {
    const [a, setA] = useState(3)
    const [b, setB] = useState(3)

    const resultA = useMemo(() => {
      let tempResultA = 1

      for (let i = 1; i <= a; i++) {
        let fake = 0

        while (fake < 100000000) {
          fake++
          Math.random()
        }
        tempResultA *= i
      }

      return tempResultA
    }, [a])
    let resultB = 1

    for (let i = 1; i <= b; i++) {
      resultB *= i
    }

    return (
      <>
        <input type="number" value={a} onChange={e => setA(Number(e.currentTarget.value))} />
        <input type="number" value={b} onChange={e => setB(Number(e.currentTarget.value))} />
        <hr />
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
      </>
    )
  },
}

export const HelpsToReactMemo: Story = {
  render: () => {
    console.log('HelpsToReactMemo')

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState<string[]>(['Kolya', 'Nikita', 'Darya', 'Maxim'])

    const filteredUsers = useMemo(() => {
      return users.filter(user => user.toLowerCase().includes('l'))
    }, [users])

    const incrementCounter = () => setCounter(prev => prev + 1)

    const addUser = () => setUsers([...users, `Alex ${new Date().getTime()}`])

    return (
      <>
        <button onClick={incrementCounter}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={filteredUsers} />
      </>
    )
  },
}

export const LikeUseCallback: Story = {
  render: () => {
    console.log('LikeUseCallback')

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState<string[]>(['React', 'JS', 'CSS', 'HTML'])

    const incrementCounter = () => setCounter(prev => prev + 1)

    // const memoizedAddBook = useMemo(
    //   () => () => setBooks([...books, `Angular ${new Date().getTime()}`]),
    //   [books]
    // )
    const memoizedAddBook = useCallback(() => {
      setBooks([...books, `Angular ${new Date().getTime()}`])
    }, [books])

    return (
      <>
        <button onClick={incrementCounter}>+</button>
        {counter}
        <Books books={books} addBook={memoizedAddBook} />
      </>
    )
  },
}
