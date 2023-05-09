import { Meta, StoryObj } from '@storybook/react'

import {UncontrolledOnOff} from './UncontrolledOnOff'

const meta: Meta<typeof UncontrolledOnOff> = {
   title: 'UncontrolledOnOff',
   component: UncontrolledOnOff,
   tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof UncontrolledOnOff>

export const OnMode: Story = {
   args: {
      defaultOn: true
   }
}
export const OffMode: Story = {
   args: {
      defaultOn: false
   }
}