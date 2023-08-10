const { createSlice } = require('@reduxjs/toolkit')
const { getMethodsAction, getCategoriesAction, getMaxSpendAction, createCategoriesAction, deleteCategoryAction, createMaxSpendAction, updateMaxSpendAction, deleteMaxSpendAction, getAllState } = require('../actions/otherInfoActions')

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
        state.categories = action.payload
      }),
      builder.addCase(createCategoriesAction.fulfilled, (state, action) => {
        state.categories.push(action.payload)
      }),
      builder.addCase(deleteCategoryAction.fulfilled, (state, action) => {
        state.categories = state.categories.filter(el => el.id !== action.payload)
      }),
      builder.addCase(getMaxSpendAction.fulfilled, (state, action) => {
        state.maxSpend = action.payload
      }),
      builder.addCase(createMaxSpendAction.fulfilled, (state, action) => {
        state.maxSpend = action.payload.amount
      }),
      builder.addCase(updateMaxSpendAction.fulfilled, (state, action) => {
        state.maxSpend = action.payload.amount
      }),
      builder.addCase(deleteMaxSpendAction.fulfilled, (state, action) => {
        state.maxSpend = null
      })
  }
})

export default otherInfoSlice.reducer