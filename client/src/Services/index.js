import axios from "axios";

const getMockData = () => {
  return axios.get("http://localhost:5000/");
};

export default getMockData;