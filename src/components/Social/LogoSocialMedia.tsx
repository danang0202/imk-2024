import React from "react";

interface Props {
  path: string;
  url: string;
}

const LogoSocialMedia: React.FC<Props> = ({ path, url }) => {
  const goTo = (url: string) => {
    console.log(url);
  };

  return (
    <div
      className="icon bg-grey p-3 rounded-full cursor-pointer hover:bg-warning hover:scale-110"
      onClick={() => goTo(url)}
    >
      <img src={path} alt="IG" />
    </div>
  );
};

export default LogoSocialMedia;
