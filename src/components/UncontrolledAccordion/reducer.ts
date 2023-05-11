export type StateType = {
  collapsed: boolean
}

export type ActionTypes = ReturnType<typeof changeModeMenuAC>

export const reducer = (state: StateType, action: ActionTypes): StateType => {
  switch (action.type) {
    case 'TOGGLE-COLLAPSED':
      return { ...state, collapsed: !state.collapsed }
    default:
      throw new Error('Bad action type')
  }
}

export const changeModeMenuAC = () => ({ type: 'TOGGLE-COLLAPSED' } as const)
