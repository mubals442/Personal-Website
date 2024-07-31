import React from "react";
import MyPic from "/src/assets/MyPic.jpeg";

function Avatar() {
  return (
    <div className="flex justify-center items-center">
      <div className="p-1 bg-gradient-to-tr from-Green to-Blue rounded-full mt-5 mb-5">
          <img
            className="rounded-full h-32 w-32 "
            src={MyPic}
            alt="avatar"
          />
      </div>
    </div>
  );
}

export default Avatar;
