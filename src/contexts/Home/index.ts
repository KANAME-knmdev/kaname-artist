import React from "react";
import { PostParams, User, Post } from "../../containers/Home/types";

export const FunctionContext = React.createContext<{
  setParams: (params: Partial<PostParams>) => void;
}>({
  setParams: () => {}
});

export const StateContext = React.createContext<{
  user: User;
  posts: Post[];
  isLoading: boolean;
}>({
  user: {
    uid: "",
    possessionM: null
  },
  posts: [],
  isLoading: true
});
