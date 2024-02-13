import { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa6";

export const CopyToClipBoard = ({ text }: any) => {
  const [copy, setCopy] = useState(false);
  const copyToClip = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopy(true);

      setTimeout(() => {
        setCopy(false);
      }, 5000);
    } catch (error) {
      console.error();
    }
  };
  return (
    <div onClick={copyToClip} className="cursor-pointer">
      {copy ? <FaRegThumbsUp /> : <MdOutlineContentCopy />}
    </div>
  );
};
