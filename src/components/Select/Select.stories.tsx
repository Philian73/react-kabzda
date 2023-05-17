import { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select.tsx'

const meta: Meta<typeof Select> = {
  title: 'components/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    items: [
      { id: '1', country: 'Russia', city: 'Moscow', population: 12000000 },
      { id: '2', country: 'Russia', city: 'Saint Petersburg', population: 617000 },
      { id: '3', country: 'Russia', city: 'Ulyanovsk', population: 617000 },
      { id: '4', country: 'Belarus', city: 'Minsk', population: 1921000 },
      { id: '5', country: 'Belarus', city: 'Gomel', population: 526000 },
      { id: '6', country: 'Belarus', city: 'Mogilev', population: 374644 },
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

type Story = StoryObj<typeof meta>

export const WithValue: Story = {
  render: args => {
    return <Select {...args} value={'2'} />
  },
}

export const WithoutValue: Story = {
  render: args => {
    return <Select {...args} value={null} />
  },
}
