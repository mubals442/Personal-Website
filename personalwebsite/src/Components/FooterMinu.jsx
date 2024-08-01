import React, { useState } from "react";
import HomeIcon from "../Icons/HomeIcon";
import MentorshipIcon from "../Icons/MentorshipIcon";
import PortofolioIcon from "../Icons/PortofolioIcon";
import MoreIcon       from "../Icons/MoreIcon"

function FooterMinu() {
  const [item, setItem] = useState([
    {
      icon: <HomeIcon/>,
      title: "Home",
      LinkToGo: "#",
    },
    {
      icon: <MentorshipIcon/>,
      title: "Mentorship",
      LinkToGo: "#",
    },
    {
      icon: (
        <PortofolioIcon/>
      ),
      title: "Portofolio",
      LinkToGo: "#",
    },
    {
      icon: (
        <MoreIcon/>
      ),
      title: "More",
      LinkToGo: "#",
    },
  ]);



  return (
    <div className="sm:hidden">
      <ul className="flex items-center justify-around bg-FooterColor pt-3">
        {item.map((el, index) => (
          <a
          key={index}
            href={el.LinkToGo}
            className="hover:transform hover:-translate-y-1 duration-500"
          >
            <li  className="cursor-pointer hover:text-white">
              <span className="flex items-center justify-center">
                {el.icon}
              </span>
              {el.title}
            </li>
            
        </a>
        ))}
      </ul>
    </div>
  );
}

export default FooterMinu;
