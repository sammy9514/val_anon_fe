import useSWR from "swr";
import { getAll, getOne } from "../api/Api";

export const getAllUser = () => {
  const { data } = useSWR(`api/v1/view`, () => {
    return getAll().then((res) => {
      console.log(res.data);

      return res.data;
    });
  });
  return { data };
};

export const getOneUser = (token: any) => {
  const { data } = useSWR(`api/v1/get-message`, () => {
    return getOne(token).then((res) => {
      console.log(res.data.messageGrab);
      return res.data.messageGrab;
    });
  });
  return { data };
};
