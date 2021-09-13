type TReducerType = typeof import('lib/store').reducer;
declare type RootState = ReturnType<TReducerType>;

type TStore = typeof import('lib/store').store;
declare type AppDispatch = TStore['dispatch'];
