const { createSlice } = require("@reduxjs/toolkit");
const {
  getMethodsAction,
  getCategoriesAction,
  getMaxSpendAction,
  createCategoriesAction,
  deleteCategoryAction,
  createMaxSpendAction,
  updateMaxSpendAction,
  deleteMaxSpendAction,
  getAllState,
} = require("../actions/otherInfoActions");

const initialState = {
  methods: [],
  categories: [],
  categoriesCreated: [],
  maxSpend: null,
};

const otherInfoSlice = createSlice({
  name: "other info",
  initialState,
  reducers: {
    pushCreatedCategory: (state, action) => {
      state.categories = [...state.categories, action.payload];
      state.categoriesCreated = state.categories.filter(
        (category) =>
          category.id !== 1 &&
          category.id !== 2 &&
          category.id !== 3 &&
          category.id !== 4 &&
          category.id !== 5
      );
    },
    filterCreatedCategory: (state) => {
      state.categoriesCreated = state.categories.filter(
        (category) =>
          category.id !== 1 &&
          category.id !== 2 &&
          category.id !== 3 &&
          category.id !== 4 &&
          category.id !== 5
      );
    },
    filterCreatedCategory: (state) => {
      state.categoriesCreated = state.categories.filter(
        (category) =>
          category.id !== 1 &&
          category.id !== 2 &&
          category.id !== 3 &&
          category.id !== 4 &&
          category.id !== 5 
      );
    },
    deleteCreatedCategory: (state, action) => {
      const deletedCategoriesCreated = state.categoriesCreated.filter(
        (category) => category.id !== action.payload
      );
      const deletedCategories = state.categories.filter(
        (category) => category.id !== action.payload
      );
      state.categories = deletedCategories;
      state.categoriesCreated = deletedCategoriesCreated;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMethodsAction.fulfilled, (state, action) => {
      state.methods = action.payload;
    }),
      builder.addCase(getCategoriesAction.fulfilled, (state, action) => {
        state.categories = action.payload;
      }),
      builder.addCase(createCategoriesAction.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      }),
      builder.addCase(deleteCategoryAction.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (el) => el.id !== action.payload
        );
      }),
      builder.addCase(getMaxSpendAction.fulfilled, (state, action) => {
        state.maxSpend = action.payload;
      }),
      builder.addCase(createMaxSpendAction.fulfilled, (state, action) => {
        state.maxSpend = action.payload.amount;
      }),
      builder.addCase(updateMaxSpendAction.fulfilled, (state, action) => {
        state.maxSpend = action.payload.amount;
      }),
      builder.addCase(deleteMaxSpendAction.fulfilled, (state, action) => {
        state.maxSpend = null;
      });
  },
});

export const { pushCreatedCategory, filterCreatedCategory, deleteCreatedCategory } =
  otherInfoSlice.actions;

export default otherInfoSlice.reducer;
