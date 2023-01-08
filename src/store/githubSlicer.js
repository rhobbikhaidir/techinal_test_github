import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import service from "../service";

export const findUsers = createAsyncThunk(
  "/findUsers",
  async (user, { rejectWithValue }) => {
    try {
      const response = await service.findUsers(user);
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getUserRepo = createAsyncThunk(
  "/getUserRepo",
  async (user, { rejectWithValue }) => {
    try {
      const response = await service.getUserRepo(user);
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const initialState = {
  values: [],
  findUser: {},
  repoUser: [],
  show: false,
};

const githubSlicer = createSlice({
  name: "sliceUsers",
  initialState: { ...initialState },
  reducers: {
    setChangeVal: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(findUsers.fulfilled, (state, action) => {
      state.findUser = action.payload;
    });
    builder.addCase(getUserRepo.fulfilled, (state, action) => {
      state.repoUser = action.payload;
    });
  },
});
export const { setChangeVal } = githubSlicer.actions;
export default githubSlicer.reducer;
