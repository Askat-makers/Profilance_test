import { createSlice } from "@reduxjs/toolkit";
import { news } from "../../helpers/const";

const initialState = {
  news: [],
};

export const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getNews(state) {
      state.news = news;
    },
    filterNews(state, action) {
      state.news = news.filter((news) => {
        return news.title.toLowerCase().includes(action.payload.toLowerCase());
      });
    },
  },
});

export const { getNews, filterNews } = NewsSlice.actions;
