import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Timer from "./Timer";
import { useNavigate } from "react-router-dom";

const Main: React.FC = () => {
  const navigate = useNavigate();
  const [noCount, setNoCount] = useState<number>(0);
  const [yesPressed, setYesPressed] = useState<boolean>(false);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    if (noCount === 15) {
      // Display toast message and refresh the page
      toast.error(
        "Ouch! You don't want to go on a val with Me. 🤧....No wam🥲",
        {
          autoClose: 5000,
          hideProgressBar: true,
          onClose: () => {
            window.location.reload();
          },
        }
      );
    }
  };

  const handleYesClick = () => {
    setYesPressed(true);
    // Show toast alert
    toast.success("Yayyyy you accepted me as your Val", {
      autoClose: 3000,
      hideProgressBar: true,
    });

    // Open WhatsApp with a pre-filled message
    // const phoneNumber = "09059493764"; // Replace with your WhatsApp number
    // const message = "Hello! I accepted ld as my Val!";
    // const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    //   message
    // )}`;

    navigate("/anon");
  };

  const getNoButtonText = () => {
    const phrases: string[] = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again o!",
      "Last chance!",
      "Surely not?",
      "You fit regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Omor have a heart na!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(🤧🥺)",
    ];

    const currentPhrase = phrases[Math.min(noCount, phrases.length - 1)];

    if (noCount === phrases.length - 1) {
      // If it's the last phrase, show a toast message
      return "Ouch! You don't want to go on a val with me.";
    }

    return currentPhrase;
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3J6Ync3dW9tNTdkMDRheGtlNDMxMGx5emY0YWZ5ZHk5emRpZTM1biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6gbeVN2ZPbG2COKA/giphy.gif')",
      }}
    >
      <ToastContainer />
      {yesPressed ? (
        <div className="flex items-center justify-center flex-col px-[50px] py-[30px] ">
          <div className="">
            <img
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="Bear Kiss"
              className="rounded-md"
            />
          </div>
          <div className="text-4xl font-bold my-4">Ok yay!!!</div>
          <div className="text-4xl font-bold my-4 mobile:text-[22px] animate-pulse radio:text-[18px]">
            See you on the 14th🤭!!!
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Timer />
          <img
            className="h-[200px] rounded-md"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Valentine Bear"
          />
          <h1 className="text-4xl my-4 rounded-md mobile:text-[35px] phone:text-[32px] radio:text-[26px]">
            Will you be my Val?
          </h1>
          <div className="mobile:flex mobile:items-center mobile:justify-center mobile:flex-col mobile:gap-[10px] flex gap-4">
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-lg`}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-lg"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
