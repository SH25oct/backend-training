import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunks for API calls
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('http://localhost:5000/api/v1/users');
    if (!response.ok) throw new Error('Failed to fetch users');
    return await response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchOneUser = createAsyncThunk('users/fetchOneUser', async (id, { rejectWithValue }) => {
  try {
    const response = await fetch(`http://localhost:5000/api/v1/users/${id}`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return await response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id, { rejectWithValue }) => {
  try {
    const response = await fetch(`http://localhost:5000/api/v1/users/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Failed to delete user');
    return await response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Users slice
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    selectedUser: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSelectedUser: (state) => {
      state.selectedUser = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch all users
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Fetch one user
    builder.addCase(fetchOneUser.fulfilled, (state, action) => {
      state.selectedUser = action.payload;
    });

    // Delete user
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.meta.arg);
    });
  },
});

// Export actions and reducer
export const { clearSelectedUser } = usersSlice.actions;
export default usersSlice.reducer;