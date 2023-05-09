import {useState} from 'react'

import { Meta, StoryObj } from '@storybook/react'

import {Rating, RatingValueType} from './Rating'

const meta: Meta<typeof Rating> = {
   title: 'Rating',
   component: Rating,
   tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Rating>

export const RatingDefault: Story = {
   args: {
      value: 0,
   },
}

export const Rating1Star: Story = {
   args: {
      value: 1,
   },
}

export const Rating2Star: Story = {
   args: {
      value: 2,
   },
}

export const Rating3Star: Story = {
   args: {
      value: 3,
   },
}

export const Rating4Star: Story = {
   args: {
      value: 4,
   },
}

export const Rating5Star: Story = {
   args: {
      value: 5,
   },
}

export const RatingChanging: Story = {
   render: () => {
      const [value, setValue] = useState<RatingValueType>(0)

      return <Rating value={value} onClick={setValue}/>
   }
}