import axios from "axios";

const url = "https://val-anon-be.onrender.com/api/v1";

export const registerUser = async (data: any) => {
  try {
    return await axios.post(`${url}/register`, data).then((res: any) => {
      console.log(res.data);
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
export const sendMessage = async (data: any, token: any) => {
  try {
    return await axios
      .post(`${url}/send-message/${token}`, data)
      .then((res: any) => {
        console.log("y", token);
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const getAll = async () => {
  try {
    return await axios.get(`${url}/view`).then((res: any) => {
      console.log("api", res.data);

      return res;
    });
  } catch (error) {
    console.log(error);
  }
};
export const getOne = async (token: any) => {
  try {
    return await axios.get(`${url}/get-message/${token}`).then((res: any) => {
      console.log("api", res.data);

      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
