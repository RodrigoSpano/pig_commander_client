const { createSlice } = require('@reduxjs/toolkit')
const { getMethodsAction, getCategoriesAction, getMaxSpendAction } = require('../actions/otherInfoActions')

const initialState = {
  methods: [],
  categories: [],
  maxSpend: null
}

const otherInfoSlice = createSlice({
  name: 'other info',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMethodsAction.fulfilled, (state, action) => {
      state.methods = action.payload
    }),
      builder.addCase(getCategoriesAction.fulfilled, (state, action) => {
        state.categories = action.paylaod
      }),
      builder.addCase(getMaxSpendAction.fulfilled, (state, action) => {
        state.maxSpend = action.paylaod
      })
  }
})

export default otherInfoSlice.reducer