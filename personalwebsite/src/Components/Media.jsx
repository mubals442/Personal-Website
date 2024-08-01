import React, { useState } from "react";
import GitHub from "../Icons/GitHub";
import LinkedIn from "../Icons/LinkedIn";

function Media() {
  const [contact, setContact] = useState([
    {
      icon: <GitHub />,
    },
    {
      icon: <LinkedIn />,
    },
  ]);

  return (
    <>
      <ul className="flex justify-center items-center mb-7 ">
        {contact.map((el, index) => (
          <li key={index} className="hover:transform hover:-translate-y-1 duration-500">
            {el.icon}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Media;
