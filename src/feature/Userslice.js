import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authservice } from './userService';

const getclientlocalstorage = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await authservice.register(userData);
      console.log('Register response:', response.data); // Log response
      return response.data.message;
    } catch (error) {
      console.error('Register error:', error.response?.data?.message || error.message); // Log error
      return rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
  }
);

export const LoginUser = createAsyncThunk(
  'auth/LoginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await authservice.login(userData);
      const token = response.data.token;
      console.log('Login response:', response.data); // Log response
      localStorage.setItem('token', token); // Save token to localStorage
      return token;
    } catch (error) {
      console.error('Login error:', error.response?.data?.message || error.message); // Log error
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const LoginUser_google = createAsyncThunk(
  'auth/LoginUser_google',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await authservice.login_google(userData);
      const token = response.data.token;
      console.log('Login response:', response.data); // Log response
      localStorage.setItem('token', token); // Save token to localStorage
      return token;
    } catch (error) {
      console.error('Login error:', error.response?.data?.message || error.message); // Log error
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: getclientlocalstorage,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.message = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload || 'Registration failed';
    });

    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.user = action.payload;

    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload || 'Login failed';
    });


    builder.addCase(LoginUser_google.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    });
    builder.addCase(LoginUser_google.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.user = action.payload;

    });
    builder.addCase(LoginUser_google.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload || 'Login failed';
    });
  },
});

export default authSlice.reducer;
