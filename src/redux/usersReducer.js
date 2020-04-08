import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import {UsersApi} from '../api/UsersApi';

const api = new UsersApi();

export const fetchUsers = createAsyncThunk('users/fetchUsers', async params => {
  const response = await api.search(params);
  return response.data;
});

export const usersAdapter = createEntityAdapter();

const usersReducer = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState({
    loading: 'pending',
    filters: {},
    pagination: {},
    error: null,
  }),
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: state => {
      state.loading = 'pending';
      state.error = null;
      usersAdapter.removeAll();
    },
    [fetchUsers.fulfilled]: (state, action) => {
      if (state.loading === 'pending') {
        const {hits, filters} = action.payload;
        state.loading = 'idle';
        state.filters = filters;
        usersAdapter.setAll(state, hits);
      }
    },
    [fetchUsers.rejected]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = action.error;
      }
    },
  },
});

export default usersReducer.reducer;

export const {selectAll: selectAllUsers} = usersAdapter.getSelectors(
  state => state.users,
);
