import { changeModeMenuAC, reducer, StateType } from './reducer.ts'

test('collapsed should be true', () => {
  //data
  const state: StateType = {
    collapsed: false,
  } as const

  //action
  const newState = reducer(state, changeModeMenuAC())

  //expect
  expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
  //data
  const state: StateType = {
    collapsed: true,
  } as const

  //action
  const newState = reducer(state, changeModeMenuAC())

  //expect
  expect(newState.collapsed).toBe(false)
})
