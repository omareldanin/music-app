import { createSlice } from "@reduxjs/toolkit";
const songsSlice = createSlice({
  name: "song",
  initialState: {
    playinglist: [],
    songs: [],
    currentSong: null,
  },
  reducers: {
    setSong(state, action) {
      state.songs = action.payload;
      state.playinglist = action.payload;
    },
    setCurrentSong(state, action) {
      state.currentSong = action.payload;
    },
    setCurrentPlaylist(state, action) {
      state.playinglist = action.payload;
    },
    nextSonghandler(state) {
      const current = state.currentSong;
      const currentIndex = state.playinglist.findIndex(
        (item) => item.id === current.id
      );
      if (currentIndex === state.playinglist.length - 1) {
        state.currentSong = state.playinglist[0];
      } else {
        state.currentSong = state.playinglist[currentIndex + 1];
      }
    },
    preSonghandler(state) {
      const current = state.currentSong;
      const currentIndex = state.playinglist.findIndex(
        (item) => item.id === current.id
      );
      if (currentIndex === 0) {
        state.currentSong = state.playinglist[state.playinglist.length - 1];
      } else {
        state.currentSong = state.playinglist[currentIndex - 1];
      }
    },
  },
});
export default songsSlice;
export const sliceActions = songsSlice.actions;
