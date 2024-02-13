import React from "react";
import { FacebookShareButton } from "react-share";
import { FaFacebookSquare } from "react-icons/fa";

export const ShareButtons: React.FC<{ url: string }> = ({ url }) => {
  const share = url;
  const encodedURL = encodeURIComponent(share);
  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`;
  return (
    <div>
      <FacebookShareButton url={facebookURL}>
        <FaFacebookSquare />
      </FacebookShareButton>
    </div>
  );
};
