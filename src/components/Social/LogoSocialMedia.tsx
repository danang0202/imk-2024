import React from "react";

interface Props {
  path: string;
  url: string;
}

const LogoSocialMedia: React.FC<Props> = ({ path, url }) => {

  return (
    <div
      className="icon bg-grey p-2 xl:p-3 rounded-full cursor-pointer hover:bg-warning transform hover:-translate-y-1 transiition duration-300"
    >
      <a href={url} target="_blank">
        <img src={path} alt="IG" className="h-4 md:h-6" />
      </a>
    </div>
  );
};

export default LogoSocialMedia;
