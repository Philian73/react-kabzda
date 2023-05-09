import { Meta, StoryObj } from '@storybook/react'

import {UncontrolledRating} from './UncontrolledRating'

const meta: Meta<typeof UncontrolledRating> = {
   title: 'UncontrolledRating',
   component: UncontrolledRating,
   tags: ['autodocs'],
   argTypes: {
      onChange: {action: 'rating changed inside component'}
   }
}

export default meta

type Story = StoryObj<typeof UncontrolledRating>

export const RatingDefault: Story = {
   args: {
      defaultValue: 0,
   }
}

export const Rating1Star: Story = {
   args: {
      defaultValue: 1,
   }
}

export const Rating2Star: Story = {
   args: {
      defaultValue: 2
   }
}

export const Rating3Star: Story = {
   args: {
      defaultValue: 3
   }
}

export const Rating4Star: Story = {
   args: {
      defaultValue: 4
   }
}

export const Rating5Star: Story = {
   args: {
      defaultValue: 5
   }
}