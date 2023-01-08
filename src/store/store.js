import { configureStore } from "@reduxjs/toolkit";
import githubSlicer from "./githubSlicer";


 const store = configureStore({reducer:githubSlicer })



 export default store;