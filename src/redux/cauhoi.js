import { createSlice } from '@reduxjs/toolkit'
const cauhoi = createSlice({
  name: ' questions',
  initialState: {
    queue: [],
    answers: [],
    trace: 0
  },
  reducers: {
    startExamAction: (state, action) => {
      let { question, answers } = action.payload
      return {
        ...state,
        queue: question,
        answers
      }
    },
    cautiep: (state) => {
     
      return {
        ...state,
        trace: state.trace + 1
      }
    },
    
    cautruoc: (state) => {
     
      return {
        ...state,
        trace: state.trace - 1
      }
    }
  }
})
export const { startExamAction, cautiep, cautruoc } = cauhoi.actions;
export default cauhoi.reducer;