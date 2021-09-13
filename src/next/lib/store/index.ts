import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';
import contentSlice from 'lib/store/content/reducer';
import contentActions from 'lib/store/content/actions';

const initialState: RootState = {
  content: {
    loading: false,
    error: null,
    home: {
      Title: '',
      SubTitle: '',
      HeroBackground: {
        url: '',
      },
    },
  },
};

const reducer = combineReducers({
  content: contentSlice.reducer,
});

const store: (preloadedState?: RootState) => Store<RootState> = (preloadedState = initialState) =>
  configureStore({ reducer, preloadedState });

export { store, reducer, contentActions };
