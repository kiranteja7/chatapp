import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeUser: null,
  messages: [],
  activeUsers: [],
  typingUsers: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.activeUser = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setActiveUsers: (state, action) => {
      state.activeUsers= action.payload;
    },
    addTypingUser: (state, action) => {
      state.typingUsers.push(action.payload);
    },
    removeTypingUser: (state, action) => {
      state.typingUsers = state.typingUsers.filter(
        (user) => user !== action.payload
      );
    },
  },
});

export const {
  setActiveUser,
  setMessages,
  addMessage,
  setActiveUsers,
  addTypingUser,
  removeTypingUser,
} = chatSlice.actions;

export default chatSlice.reducer;
