import axios from "axios";
import { create } from "zustand";

export const useFetchStore = create((set) => ({
  posts: [],
  post: null,
  fetchData: async (id) => {
    try {
      const res = await axios.get(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com//api/V1/todos/${id}`)
      console.log('userId',id)
      console.log("url",`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos/${id}`)
      console.log("res",res)
      set({posts:res.data.todos})
    } catch (error) {
      console.log(error)
    }
  }
}))




// const usePostStore = create( (set)=> ({
//   posts: [],
//   post: null,
//   actionFetchPostsByUserId: async (userId) => {
//     const res = await axios.get(`https://api-post-ts.onrender.com/api/v1/posts/${userId}`)
//     set({posts: res.data.posts})

//   }
// }) )

