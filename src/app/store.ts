import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import articlesReducer from '../features/adminSide/articles/ArticlesSlice';
import usersReducer from '../features/adminSide/users/UsersSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    users: usersReducer
   // comments: commentsReducer

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
