import moment from "moment";
import { getOneUser } from "../hooks/DataFetcher";

import { useParams } from "react-router-dom";

export const GetMessage = () => {
  const { token } = useParams();
  const { data } = getOneUser(token);
  console.log(data);

  return (
    <div className="w-full min-h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] flex items-center justify-center bg-[#e3b3d8]">
      <div className="w-[90%] h-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 sm-gap-4 ">
        {!data?.message ? (
          data?.map((el: any) => (
            <>
              <div className="lg:w-[340px] lg:h-[300px] w-[270px] h-[200px]  mt-7 mx-6  border-red-500 border-[3px] rounded-md ">
                <div className="w-full h-[80%] bg-[whitesmoke] p-3 rounded-t-md flex items-center justify-center capitalize">
                  {el?.message}
                </div>
                <div className="text-[13px] h-[10%] text-center mt-3">
                  {moment(Date.parse(el.createdAt)).format("LLLL")}
                </div>
              </div>
            </>
          ))
        ) : (
          <div className="w-full h-full flex justify-center items-center bg-white">
            No messages yet
          </div>
        )}
      </div>
    </div>
  );
};
