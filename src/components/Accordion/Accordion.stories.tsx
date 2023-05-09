import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Accordion } from './Accordion.tsx'

const meta: Meta<typeof Accordion> = {
  title: 'components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    titleValue: {
      description: 'Название спойлера.',
    },
    collapsed: {
      description: 'Состояние спойлера, свёрнут он или нет.',
    },
    onChange: {
      description:
        'Функция-коллбэк, которая при клике на название спойлера меняет состояние collapsed на противоположное.',
    },
  },
}

export default meta

type Story = StoryObj<typeof Accordion>

export const CollapsedMode: Story = {
  args: {
    titleValue: 'Menu',
    collapsed: true,
  },
}

export const UncollapsedMode: Story = {
  args: {
    titleValue: 'Menu',
    collapsed: false,
  },
}

export const ModeChanging: Story = {
  args: {
    titleValue: 'Menu',
  },
  render: args => {
    const [collapsed, setCollapsed] = useState(false)

    return <Accordion {...args} collapsed={collapsed} onChange={() => setCollapsed(!collapsed)} />
  },
}
