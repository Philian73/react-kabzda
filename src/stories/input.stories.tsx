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
