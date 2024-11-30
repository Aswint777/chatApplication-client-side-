import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Example: Async action for user signup (optional, if using an API call)
export const userSignUp = createAsyncThunk(
    "user/signUp",
    async (userData, { rejectWithValue }) => {
      try {
        const response = await fetch("http://localhost:3000/userSignUpPost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Signup failed");
        }
  
        const result = await response.json(); // e.g., { user: { ... }, message: "Signup successful" }
        return result; // Pass this to the `fulfilled` state
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const userLogin = createAsyncThunk(
    "user/login",
    async (userData, { rejectWithValue }) => {
      try {
        console.log('login data is here ');
        
        const response = await fetch("http://localhost:3000/userLoginPost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Login failed");
        }
  
        const result = await response.json(); // e.g., { user: { ... }, message: "Signup successful" }
        return result; // Pass this to the `fulfilled` state
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: null,
    loading: false,
    message: null,
  },
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user; // Save the user object
        state.message = action.payload.message; // Optional: Save success message
      })
      .addCase(userSignUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Save error message
      })
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user; // Save the user object
        state.message = action.payload.message; // Optional: Save success message
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Save error message
      })
  },
  
})

export const { clearError } = userSlice.actions;

export default userSlice.reducer;
