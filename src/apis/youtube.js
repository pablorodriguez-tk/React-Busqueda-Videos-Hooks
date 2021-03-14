import axios from "axios";

const KEY = "AIzaSyBltarQQx5jQ1SZLbzqqPLn-868t-p93_Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
