// Landing page reducer
export const initialState = {
  isLoading: false,
  data: null,
  error: null,
  count: 0,
}

export const actionTypes = {
  SET_LOADING: 'SET_LOADING',
  SET_DATA: 'SET_DATA',
  SET_ERROR: 'SET_ERROR',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
}

export const landingReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
        error: null,
      }
    case actionTypes.SET_DATA:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null,
      }
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }
    case actionTypes.RESET:
      return {
        ...state,
        count: 0,
      }
    default:
      return state
  }
}

