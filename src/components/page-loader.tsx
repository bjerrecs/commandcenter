import React from "react";

export const PageLoader = () => {
  const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <img src={loadingImg} alt="Loading..." className="w-1/6" />
    </div>
  );
};