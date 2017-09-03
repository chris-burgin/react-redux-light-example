const light = (state = {isOn: false, suspectCount: 1}, action) =>
  action.type === "LIGHT_SET_STATUS"
    ? ({ ...state, isOn: action.isOn }) :
  action.type === "LIGHT_SET_SUSPECT_COUNT"
    ? ({ ...state, suspectCount: action.count}) :
  state // return state if no match

export { light }