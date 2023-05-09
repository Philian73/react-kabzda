import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useRef, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const meta: Meta<DefaultInputPropsType> = {
  title: 'test/input',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const UncontrolledInput: Story = {
  render: () => <input type="text" />,
}

export const TrackValueOfUncontrolledInput: Story = {
  render: () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value)
    }

    return (
      <>
        <input type="text" onChange={onChangeHandler} /> - {value}
      </>
    )
  },
}

export const GetValueOfUncontrolledInputByButtonPress: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
      // inputRef.current && setValue(inputRef.current.value)
      const el = inputRef.current as HTMLInputElement

      setValue(el.value)
    }

    return (
      <>
        <input type="text" ref={inputRef} />
        <button onClick={onClickHandler}>save</button> - actual value: {value}
      </>
    )
  },
}

export const ControlledInputWithFixedValue: Story = {
  args: {
    value: 'Philian73',
  },
  render: args => <input type="text" {...args} />,
}

export const ControlledInput: Story = {
  render: () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value)
    }

    return <input type="text" value={value} onChange={onChangeHandler} />
  },
}

export const ControlledCheckbox: Story = {
  render: () => {
    const [value, setValue] = useState(true)

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.checked)
    }

    return <input type="checkbox" checked={value} onChange={onChangeHandler} />
  },
}

export const ControlledSelect: Story = {
  render: () => {
    const [value, setValue] = useState<string | undefined>('2')

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      setValue(event.currentTarget.value)
    }

    return (
      <select value={value} onChange={onChangeHandler}>
        <option>none</option>
        <option value="1">Ulyanovsk</option>
        <option value="2">Moscow</option>
        <option value="3">Saint Petersburg</option>
      </select>
    )
  },
}
