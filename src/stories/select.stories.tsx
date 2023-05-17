import { useMemo } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Select } from '../components/Select/Select.tsx'

const meta: Meta<typeof Select> = {
  title: 'test/select',
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
}

export default meta
type Story = StoryObj<typeof meta>

export const SelectExample: Story = {
  render: args => {
    console.log('ITEMS RENDERING')

    const items1 = useMemo(() => {
      return args.items.filter(item => item.country === 'Russia')
    }, [args.items])
    const items2 = useMemo(() => {
      return args.items.filter(item => Number(item.id) > 3)
    }, [args.items])
    const items3 = useMemo(() => {
      return args.items.filter(item => item.population > 1000000)
    }, [args.items])

    return (
      <>
        <Select items={items1} value={'1'} />
        <hr />
        <hr />
        <hr />
        <Select items={items2} value={'1'} />
        <hr />
        <hr />
        <hr />
        <Select items={items3} value={'1'} />
        <hr />
        <hr />
        <hr />
      </>
    )
  },
}
