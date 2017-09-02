const light = (state = {isOn: false, color: "#fff"}, action) =>
  action.type === "LIGHT_SET_STATUS"
    ? ({ ...state, isOn: action.isOn })
  : state

export { light }