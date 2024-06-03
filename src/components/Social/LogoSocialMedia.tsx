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
      className="icon bg-grey p-2 xl:p-3 rounded-full cursor-pointer hover:bg-warning transform hover:-translate-y-1 transiition duration-300"
      onClick={() => goTo(url)}
    >
      <img src={path} alt="IG" className="h-4 md:h-6" />
    </div>
  );
};

export default LogoSocialMedia;
