import React from "react";
import MyPic from "/src/assets/MyPic.jpeg"

function Avatar() {
  return (
    <div className="flex justify-center items-center">
      <img
        className="border-4 border-Green rounded-full h-28 mt-5 mb-5"
        src={MyPic}
        alt="avatar"
      />
    </div>
  );
}

export default Avatar;
