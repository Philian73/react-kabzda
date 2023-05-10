import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select.tsx'

const meta: Meta<typeof Select> = {
  title: 'components/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    items: [
      { title: 'Ulyanovsk', value: '1' },
      { title: 'Moscow', value: '2' },
      { title: 'Saint Petersburg', value: '3' },
    ],
  },
  argTypes: {
    value: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Select>

export const WithValue: Story = {
  render: args => {
    const [value, setValue] = useState('2')

    return <Select {...args} onChange={setValue} value={value} />
  },
}

export const WithoutValue: Story = {
  render: args => {
    const [value, setValue] = useState(null)

    return <Select {...args} onChange={setValue} value={value} />
  },
}
