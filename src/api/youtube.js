import axios from "axios";

const KEY = "AIzaSyBxoPTYHI7sqlO1PGNJ4Lr2cStld4vAa3Y";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video"
  }
});
