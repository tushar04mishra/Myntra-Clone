import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, // Typo fix: 'fecthDone' => 'fetchDone'
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => { // Typo fix: 'markFecthingStarted' => 'markFetchingStarted'
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => { // Typo fix: 'markFecthingFinished' => 'markFetchingFinished'
      state.currentlyFetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
