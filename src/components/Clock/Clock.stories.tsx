import { Meta, StoryObj } from '@storybook/react'

import { Clock } from './Clock.tsx'

const meta: Meta<typeof Clock> = {
  title: 'components/Clock',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const BaseExample: Story = {
  render: () => {
    return <Clock />
  },
}

export const ArrowClock: Story = {
  render: () => {
    return <Clock type="arrow" />
  },
}
