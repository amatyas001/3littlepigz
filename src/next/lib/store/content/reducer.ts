import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export default createSlice({
  name: 'content',
  initialState: {
    loading: false,
    error: null,
    home: {
      Title: '',
      SubTitle: '',
      HeroBackground: Object.create(null) as Partial<StrapiImage>,
    },
  },
  reducers: {
    setError(state, action) {
      return { ...state, error: action.payload };
    },
    setLoading(state) {
      return { ...state, loading: !state.loading };
    },
    setHomeContent(state, action: PayloadAction<StrapiAppDetailsResponse>) {
      return { ...state, home: action.payload };
    },
  },
});
