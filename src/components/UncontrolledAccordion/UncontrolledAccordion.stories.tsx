import { Meta, StoryObj } from '@storybook/react'

import { UncontrolledAccordion } from './UncontrolledAccordion'

const meta: Meta<typeof UncontrolledAccordion> = {
  title: 'UncontrolledAccordion',
  component: UncontrolledAccordion,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Название спойлера.'
    }
  },
}

export default meta

type Story = StoryObj<typeof UncontrolledAccordion>

export const Default: Story = {
  args: {
    children: 'Menu'
  },
}
