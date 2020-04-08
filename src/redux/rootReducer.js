import {combineReducers} from '@reduxjs/toolkit';
import usersReducer from './UsersSlice';

export default combineReducers({
  users: usersReducer,
});
