import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import contentReducer from 'lib/store/content/reducer';

const getHomeContent = createAsyncThunk('content/getHomeContent', async (_, { dispatch }) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/app-details`);
  dispatch(contentReducer.actions.setHomeContent(data));
});

const contentActions = {
  ...contentReducer.actions,
  getHomeContent,
};

export default contentActions;
