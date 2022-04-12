import axios from "axios";

const getMockData = () => {
  return axios.get("http://localhost:3000/");
};

export default getMockData;
