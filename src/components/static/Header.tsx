import { FaHeart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";

export const Header = () => {
  const selector = useSelector((state: any) => state.user);
  console.log(selector);
  const url = window.location.pathname;
  const spli = url.split("/")[1];

  return (
    <div
      className="w-full h-[80px] flex justify-center items-center bg-[#eed8e9] shadow-xl z-[2] sticky"
      // style={{ boxShadow: " 0px 17px 65px -16px rgba(0,0,0,0.75)" }}
    >
      <div className="w-[90%] h-full items-center flex justify-between ">
        <div className="md:text-[30px] text-[14px] text-red-500 italic font-bold flex items-center gap-1">
          Anonymously
          <div className="flex gap-2 md:text-[10px] text-[5px] text-red-600 mt-4 ">
            <FaHeart />
            <FaHeart />
            <FaHeart />
          </div>
        </div>
        {spli !== "send-message" ? (
          selector ? (
            <div className="w-[40px] h-[40px] border-red-500 border-[2px] bg-white rounded-[50%] flex justify-center text-[25px] items-center font-semibold">
              {selector.name?.charAt(0).toUpperCase()}
            </div>
          ) : (
            <div className="w-[40px] h-[40px] border-white border-[2px] rounded-[50%] flex justify-center text-[25px] items-center font-semibold  ">
              <div className="text-red-500">
                <AiOutlineUser />
              </div>
            </div>
          )
        ) : (
          <div className="w-[40px] h-[40px] border-white border-[2px] rounded-[50%]  justify-center text-[25px] items-center font-semibold hidden  ">
            <div className="text-red-500">
              <AiOutlineUser />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
