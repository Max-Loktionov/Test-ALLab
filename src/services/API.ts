import axios from "axios";

const { REACT_APP_BASE_URL, REACT_APP_ACCESS_TOKEN } = process.env;

export const fetchJobList = async () => {
  try {
    const url = `${REACT_APP_BASE_URL}?access_token=${REACT_APP_ACCESS_TOKEN}`;
    const response = await axios(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
