const light = (state = {isOn: false}, action) =>
  action.type === "LIGHT_SET_STATUS"
    ? ({ ...state, isOn: action.isOn })
  : state

export { light }