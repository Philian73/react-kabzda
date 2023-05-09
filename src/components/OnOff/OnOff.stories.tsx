import {useState} from 'react'

import { Meta, StoryObj } from '@storybook/react'

import {OnOff} from './OnOff'

const meta: Meta<typeof OnOff> = {
   title: 'OnOff',
   component: OnOff,
   tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof OnOff>

export const OnMode: Story = {
   args: {
      on: true
   },
}
export const OffMode: Story = {
   args: {
      on: false
   },
}

export const onOffChangingMode: Story = {
   render: () => {
      const [value, setValue] = useState<boolean>(true)

      return <OnOff on={value} onChange={setValue}/>
   }
}