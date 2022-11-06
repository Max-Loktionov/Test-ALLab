import axios from "axios";

const { REACT_APP_ACCESS_TOKEN } = process.env;
const BASE_URL = "https://api.json-generator.com/templates/ZM1r0eic3XEy/data";
export const fetchJobList = async () => {
  try {
    const url = `${BASE_URL}?access_token=${REACT_APP_ACCESS_TOKEN}`;
    const response = await axios(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
