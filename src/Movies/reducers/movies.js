export const GET_MOVIES = 'MOVIES/GET_MOVIES'

const initialState = []

export default function movies(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_MOVIES:
      return payload
    default:
      return state
  }
}
