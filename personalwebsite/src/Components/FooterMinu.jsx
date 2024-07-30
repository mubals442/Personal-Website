import React, { useState } from "react";

function FooterMinu() {
  const [item, setItem] = useState([
    {
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.70643 0.29303C8.5189 0.105559 8.2646 0.000244141 7.99943 0.000244141C7.73427 0.000244141 7.47996 0.105559 7.29243 0.29303L0.292431 7.29303C0.110272 7.48163 0.00947813 7.73423 0.0117566 7.99643C0.014035 8.25863 0.119204 8.50944 0.304612 8.69485C0.49002 8.88026 0.740833 8.98542 1.00303 8.9877C1.26523 8.98998 1.51783 8.88919 1.70643 8.70703L1.99943 8.41403V15C1.99943 15.2652 2.10479 15.5196 2.29232 15.7071C2.47986 15.8947 2.73421 16 2.99943 16H4.99943C5.26465 16 5.519 15.8947 5.70654 15.7071C5.89407 15.5196 5.99943 15.2652 5.99943 15V13C5.99943 12.7348 6.10479 12.4805 6.29233 12.2929C6.47986 12.1054 6.73421 12 6.99943 12H8.99943C9.26465 12 9.519 12.1054 9.70654 12.2929C9.89407 12.4805 9.99943 12.7348 9.99943 13V15C9.99943 15.2652 10.1048 15.5196 10.2923 15.7071C10.4799 15.8947 10.7342 16 10.9994 16H12.9994C13.2646 16 13.519 15.8947 13.7065 15.7071C13.8941 15.5196 13.9994 15.2652 13.9994 15V8.41403L14.2924 8.70703C14.481 8.88919 14.7336 8.98998 14.9958 8.9877C15.258 8.98542 15.5088 8.88026 15.6943 8.69485C15.8797 8.50944 15.9848 8.25863 15.9871 7.99643C15.9894 7.73423 15.8886 7.48163 15.7064 7.29303L8.70643 0.29303Z"
            fill="#FBFBFB"
          />
        </svg>
      ),
      title: "Home",
      LinkToGo: "#",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.49935 4.16667H5.83268C5.39065 4.16667 4.96673 4.34226 4.65417 4.65482C4.34161 4.96738 4.16602 5.39131 4.16602 5.83333V15.8333C4.16602 16.2754 4.34161 16.6993 4.65417 17.0118C4.96673 17.3244 5.39065 17.5 5.83268 17.5H14.166C14.608 17.5 15.032 17.3244 15.3445 17.0118C15.6571 16.6993 15.8327 16.2754 15.8327 15.8333V5.83333C15.8327 5.39131 15.6571 4.96738 15.3445 4.65482C15.032 4.34226 14.608 4.16667 14.166 4.16667H12.4993M7.49935 4.16667H12.4993M7.49935 4.16667C7.49935 4.60869 7.67494 5.03262 7.98751 5.34518C8.30007 5.65774 8.72399 5.83333 9.16602 5.83333H10.8327C11.2747 5.83333 11.6986 5.65774 12.0112 5.34518C12.3238 5.03262 12.4993 4.60869 12.4993 4.16667M7.49935 4.16667C7.49935 3.72464 7.67494 3.30072 7.98751 2.98816C8.30007 2.67559 8.72399 2.5 9.16602 2.5H10.8327C11.2747 2.5 11.6986 2.67559 12.0112 2.98816C12.3238 3.30072 12.4993 3.72464 12.4993 4.16667M7.49935 11.6667L9.16602 13.3333L12.4993 10"
            stroke="#7D7D7D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Mentorship",
      LinkToGo: "",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.33333 9.99992H11.6667M4.16667 6.66659H15.8333H4.16667ZM4.16667 6.66659C3.72464 6.66659 3.30072 6.49099 2.98816 6.17843C2.67559 5.86587 2.5 5.44195 2.5 4.99992C2.5 4.55789 2.67559 4.13397 2.98816 3.82141C3.30072 3.50885 3.72464 3.33325 4.16667 3.33325H15.8333C16.2754 3.33325 16.6993 3.50885 17.0118 3.82141C17.3244 4.13397 17.5 4.55789 17.5 4.99992C17.5 5.44195 17.3244 5.86587 17.0118 6.17843C16.6993 6.49099 16.2754 6.66659 15.8333 6.66659H4.16667ZM4.16667 6.66659V14.9999C4.16667 15.4419 4.34226 15.8659 4.65482 16.1784C4.96738 16.491 5.39131 16.6666 5.83333 16.6666H14.1667C14.6087 16.6666 15.0326 16.491 15.3452 16.1784C15.6577 15.8659 15.8333 15.4419 15.8333 14.9999V6.66659H4.16667Z"
            stroke="#7D7D7D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Portofolio",
      LinkToGo: "",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99935 4.16659V4.17492V4.16659ZM9.99935 9.99992V10.0083V9.99992ZM9.99935 15.8333V15.8416V15.8333ZM9.99935 4.99992C9.77834 4.99992 9.56637 4.91212 9.41009 4.75584C9.25381 4.59956 9.16602 4.3876 9.16602 4.16659C9.16602 3.94557 9.25381 3.73361 9.41009 3.57733C9.56637 3.42105 9.77834 3.33325 9.99935 3.33325C10.2204 3.33325 10.4323 3.42105 10.5886 3.57733C10.7449 3.73361 10.8327 3.94557 10.8327 4.16659C10.8327 4.3876 10.7449 4.59956 10.5886 4.75584C10.4323 4.91212 10.2204 4.99992 9.99935 4.99992ZM9.99935 10.8333C9.77834 10.8333 9.56637 10.7455 9.41009 10.5892C9.25381 10.4329 9.16602 10.2209 9.16602 9.99992C9.16602 9.7789 9.25381 9.56694 9.41009 9.41066C9.56637 9.25438 9.77834 9.16658 9.99935 9.16658C10.2204 9.16658 10.4323 9.25438 10.5886 9.41066C10.7449 9.56694 10.8327 9.7789 10.8327 9.99992C10.8327 10.2209 10.7449 10.4329 10.5886 10.5892C10.4323 10.7455 10.2204 10.8333 9.99935 10.8333ZM9.99935 16.6666C9.77834 16.6666 9.56637 16.5788 9.41009 16.4225C9.25381 16.2662 9.16602 16.0543 9.16602 15.8333C9.16602 15.6122 9.25381 15.4003 9.41009 15.244C9.56637 15.0877 9.77834 14.9999 9.99935 14.9999C10.2204 14.9999 10.4323 15.0877 10.5886 15.244C10.7449 15.4003 10.8327 15.6122 10.8327 15.8333C10.8327 16.0543 10.7449 16.2662 10.5886 16.4225C10.4323 16.5788 10.2204 16.6666 9.99935 16.6666Z"
            stroke="#7D7D7D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "More",
      LinkToGo: "",
    },
  ]);

  return (
    <div>
      <ul className="flex items-center justify-around bg-FooterColor">
        {item.map((el, index) => (
          <a href={el.LinkToGo}>
            <li key={index} className="cursor-pointer">
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