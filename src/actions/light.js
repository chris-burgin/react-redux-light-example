const lightSetStatus = bool => ({
  type: "LIGHT_SET_STATUS",
  isOn: bool,
})

const lightSetSuspectCount = count => ({
  type: "LIGHT_SET_SUSPECT_COUNT",
  count: count
})

export { lightSetStatus, lightSetSuspectCount }