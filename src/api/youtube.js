import axios from "axios";

const KEY = "AIzaSyByNPVh-ZC4RDtDwRM23S06JjHqDPFyQoI";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY,
  type: "video"
};
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: baseParams
});
