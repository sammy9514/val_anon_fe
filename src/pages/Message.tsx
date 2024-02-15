import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { sendMessage } from "../api/Api";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { messToggle, messageSentHold } from "../global/reduxState";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Message = () => {
  const selector = useSelector((state: any) => state.user);
  const tog = useSelector((state: any) => state.togle1);
  const messageSent = useSelector((state: any) => state.messageSent1);
  const url = window.location.pathname;
  const name = url.split("/")[2];

  const dispatch = useDispatch();
  const schema = yup.object({
    message: yup.string().required(),
  });

  const { handleSubmit, register } = useForm({
    resolver: yupResolver(schema),
  });
  const { token } = useParams();
  console.log(token);

  const onHandleSubmit = handleSubmit((data: any) => {
    dispatch(messToggle(true));
    console.log(data);
    sendMessage(data, token).then((res: any) => {
      dispatch(messToggle(false));
      dispatch(messageSentHold(true));
      console.log(res);
      console.log(tog);
      console.log(messageSent);
    });
  });

  useEffect(() => {
    return () => {
      dispatch(messageSentHold(false));
    };
  }, [dispatch]);

  return (
    <div className="w-full h-[calc(100vh-80px)] flex justify-center items-center pt-[60px]  bg-[#e3b3d8] ">
      <div className="w-70% h-full flex  flex-col ">
        {!tog && token !== selector?.token && !messageSent ? (
          <>
            <div className="md:text-[20px] text-[13px] font-semibold">
              Send a message to {name}
            </div>
            <form onSubmit={onHandleSubmit}>
              <div className="md:w-[700px] md:min-h-[300px] w-[250px] h-[100px] mt-3 rounded-md ">
                <textarea
                  {...register("message")}
                  className="md:w-[700px] md:min-h-[300px] w-[250px] h-[100px]  p-5 focus:outline-none border-red-700 border-[2px] resize-none"
                  placeholder="say something"
                />
                <div className="flex w-full mt-6 md:justify-end justify-center">
                  <button
                    type="submit"
                    className="md:py-2 py-2 text-[13px] px-[30px] bg-red-700 rounded-[50px] text-white "
                  >
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </>
        ) : (
          <>
            <div className="text-[20px] font-semibold text-center">
              Message sent
            </div>
            <div className="flex w-full mt-6 justify-end">
              <Link to={"/"}>
                <button
                  type="submit"
                  className="md:py-2 py-1 text-[13px] md:text-[16px] px-[30px] bg-red-700 rounded-[50px] text-white "
                >
                  Generate Your Link
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
