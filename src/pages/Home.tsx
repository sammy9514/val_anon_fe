import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CopyToClipBoard } from "./Copy";
import { FaWhatsapp } from "react-icons/fa6";

import { useForm } from "react-hook-form";

import { registerUser } from "../api/Api";

import { useDispatch } from "react-redux";
import { changeToggle, check } from "../global/reduxState";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ShareButtons } from "./ShareButton";

export const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: any) => state.user);
  const tog = useSelector((state: any) => state.toggle1);

  const schema = yup.object({
    name: yup.string().required(),
  });

  const { handleSubmit, register } = useForm({ resolver: yupResolver(schema) });

  const onHandleSubmit = handleSubmit((data) => {
    registerUser(data).then((res: any) => {
      dispatch(check(res.data));
      dispatch(changeToggle(true));
    });
  });

  const url = window.location.href;

  return (
    <div className="w-full h-[calc(100vh-80px)]  flex justify-center items-center py-[60px] bg-[#e3b3d8] z-[2]">
      <div className="w-[90%] h-full flex flex-col items-center justify-center">
        <h1 className="md:w-[40%] w-[80%] md:text-[40px] text-[25px] font-semibold text-red-700 mb-7 md:text-center text-center">
          Wondering what people truly feel or think about you?
        </h1>
        <p className="md:w-[35%] md:text-[17px] w-[90%] text-[10px] text-center ">
          Ever been curious about the impression you leave on others? Welcome to
          <span className="font-bold text-red-700"> Anonymously</span>, where
          you can uncover genuine thoughts and emotions anonymously shared by
          others.
          <br />
          <span className="font-bold text-red-700">Valentines Special</span>
        </p>
        <div className="mt-8 ">
          {!tog ? (
            <form onSubmit={onHandleSubmit}>
              <input
                {...register("name")}
                type="text"
                className="rounded-[50px] border-red-500 border-[2px] py-1 px-[90px] md:px-[50px] md:py-2 text-[13px] bg-transparent mr-4 flex placeholder-black ::placeholder"
                placeholder="Enter your name"
              />
              <button
                type="submit"
                className="md:py-2 md:px-[30px] py-1 px-[20px] text-[13px] md:text-[16px] bg-red-700 rounded-[50px] text-white mt-4"
              >
                Generate Link
              </button>
            </form>
          ) : null}
        </div>
        {tog ? (
          <>
            <div className="flex gap-4 items-center flex-col md:flex-row">
              <div className="py-2 px-[30px] mt-4 bg-red-700 text-[10px] md:text-[15px] text-white  max-w-[800px] rounded-[50px] flex gap-4 items-center ">
                <div className="">{`${url}/${selector?.link}`}</div>
                <div>
                  <CopyToClipBoard text={`${url}/${selector?.link}`} />
                </div>
              </div>
              <div>
                <button className="flex items-center gap-[10px] rounded-[50px] py-1 md:py-2 px-[20px] md:text-[13px] text-[10px] bg-transparent mr-4 md:mt-4 mt-1 font-bold">
                  Share on:
                  <div
                    className="text-[15px] hover:text-green-500"
                    onClick={() => {
                      const message = `message me anonymously \n \n${url}/${selector?.link}`;
                      const encodeMessage = encodeURIComponent(message);
                      const whatsappURL = `https://wa.me/?text=${encodeMessage}`;

                      window.location.href = whatsappURL;
                    }}
                  >
                    <FaWhatsapp />
                  </div>
                  <div className="text-[15px] hover:text-blue-500">
                    <ShareButtons url={`${url}/${selector?.link}`} />
                  </div>
                  <div className="text-[15px]"></div>
                </button>
              </div>
            </div>
            <Link to={`/anon/get-message/${selector?.token}`}>
              <button className="rounded-[50px] border-red-500 border-[2px] py-1 md:py-2 px-[20px] md:text-[13px] text-[10px] bg-transparent mr-4 mt-4">
                View Messages
              </button>
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};
