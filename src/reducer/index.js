export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PLAY_LIST': {
      return {
        ...state,
        playList: action.payload
      }
    }
    case 'SEARCH_CONTENT': {
      let list = Object.values(state.playList)
      const listContents = list[0].filter(item => item.name.toLowerCase().includes(action.payload.toLowerCase()))
      return {
        ...state,
        listContents
      }
    }
    default: {
      return state
    }
  }
}