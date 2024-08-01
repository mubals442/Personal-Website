import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Skills() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [element, setElement] = useState([
    {
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.48 22.136C14.9378 22.136 17.295 21.1398 19.0329 19.3665C20.7708 17.5932 21.7472 15.1882 21.7472 12.6804C21.7472 10.1726 20.7708 7.76758 19.0329 5.99432C17.295 4.22106 14.9378 3.22485 12.48 3.22485C10.0222 3.22485 7.6651 4.22106 5.92718 5.99432C4.18925 7.76758 3.21289 10.1726 3.21289 12.6804C3.21289 15.1882 4.18925 17.5932 5.92718 19.3665C7.6651 21.1398 10.0222 22.136 12.48 22.136V22.136ZM5.91427 10.3484C6.34437 9.09169 7.1118 7.98348 8.12911 7.15009C8.43956 7.63351 8.97474 7.95263 9.58406 7.95263C10.0449 7.95263 10.4869 8.13942 10.8127 8.47191C11.1386 8.80439 11.3216 9.25534 11.3216 9.72555V10.3165C11.3216 10.9435 11.5657 11.5447 12.0002 11.988C12.4347 12.4314 13.024 12.6804 13.6384 12.6804C14.2529 12.6804 14.8422 12.4314 15.2767 11.988C15.7111 11.5447 15.9552 10.9435 15.9552 10.3165C15.955 9.78751 16.1288 9.27372 16.4486 8.85737C16.7685 8.44102 17.2159 8.14617 17.7195 8.02C18.8249 9.31029 19.433 10.9666 19.4304 12.6804C19.4304 13.0823 19.398 13.4782 19.3343 13.8624H18.272C17.6576 13.8624 17.0683 14.1114 16.6338 14.5547C16.1993 14.998 15.9552 15.5993 15.9552 16.2262V18.823C14.8991 19.4465 13.7002 19.7739 12.48 19.7721V17.4082C12.48 16.7812 12.236 16.18 11.8015 15.7367C11.367 15.2933 10.7777 15.0443 10.1633 15.0443C9.5488 15.0443 8.95952 14.7952 8.52504 14.3519C8.09056 13.9086 7.84647 13.3074 7.84647 12.6804C7.84667 12.1213 7.65267 11.5803 7.29893 11.1534C6.94518 10.7264 6.45459 10.4412 5.91427 10.3484V10.3484Z"
            fill="white"
          />
        </svg>
      ),
      title: "Web Development",
      content:
        "You will receive a customized plan for your fitness journey, and lots of support.",
    },
    {
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3732 2.51245C11.066 2.51245 10.7714 2.63968 10.5541 2.86616C10.3369 3.09264 10.2148 3.3998 10.2148 3.72009C10.2148 4.04038 10.3369 4.34754 10.5541 4.57402C10.7714 4.8005 11.066 4.92773 11.3732 4.92773H13.69C13.9973 4.92773 14.2919 4.8005 14.5091 4.57402C14.7264 4.34754 14.8484 4.04038 14.8484 3.72009C14.8484 3.3998 14.7264 3.09264 14.5091 2.86616C14.2919 2.63968 13.9973 2.51245 13.69 2.51245H11.3732Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.58008 6.13525C5.58008 5.49468 5.82417 4.88034 6.25865 4.42739C6.69313 3.97444 7.28242 3.71997 7.89687 3.71997C7.89687 4.68083 8.263 5.60233 8.91472 6.28176C9.56645 6.96119 10.4504 7.34289 11.372 7.34289H13.6888C14.6105 7.34289 15.4944 6.96119 16.1462 6.28176C16.7979 5.60233 17.164 4.68083 17.164 3.71997C17.7785 3.71997 18.3678 3.97444 18.8022 4.42739C19.2367 4.88034 19.4808 5.49468 19.4808 6.13525V19.4193C19.4808 20.0598 19.2367 20.6742 18.8022 21.1271C18.3678 21.5801 17.7785 21.8346 17.164 21.8346H7.89687C7.28242 21.8346 6.69313 21.5801 6.25865 21.1271C5.82417 20.6742 5.58008 20.0598 5.58008 19.4193V6.13525ZM9.05526 10.9658C8.74804 10.9658 8.45339 11.093 8.23615 11.3195C8.01891 11.546 7.89687 11.8532 7.89687 12.1734C7.89687 12.4937 8.01891 12.8009 8.23615 13.0274C8.45339 13.2538 8.74804 13.3811 9.05526 13.3811H9.06684C9.37407 13.3811 9.66871 13.2538 9.88595 13.0274C10.1032 12.8009 10.2252 12.4937 10.2252 12.1734C10.2252 11.8532 10.1032 11.546 9.88595 11.3195C9.66871 11.093 9.37407 10.9658 9.06684 10.9658H9.05526ZM12.5304 10.9658C12.2232 10.9658 11.9286 11.093 11.7113 11.3195C11.4941 11.546 11.372 11.8532 11.372 12.1734C11.372 12.4937 11.4941 12.8009 11.7113 13.0274C11.9286 13.2538 12.2232 13.3811 12.5304 13.3811H16.0056C16.3129 13.3811 16.6075 13.2538 16.8247 13.0274C17.042 12.8009 17.164 12.4937 17.164 12.1734C17.164 11.8532 17.042 11.546 16.8247 11.3195C16.6075 11.093 16.3129 10.9658 16.0056 10.9658H12.5304ZM9.05526 15.7964C8.74804 15.7964 8.45339 15.9236 8.23615 16.1501C8.01891 16.3765 7.89687 16.6837 7.89687 17.004C7.89687 17.3243 8.01891 17.6315 8.23615 17.8579C8.45339 18.0844 8.74804 18.2116 9.05526 18.2116H9.06684C9.37407 18.2116 9.66871 18.0844 9.88595 17.8579C10.1032 17.6315 10.2252 17.3243 10.2252 17.004C10.2252 16.6837 10.1032 16.3765 9.88595 16.1501C9.66871 15.9236 9.37407 15.7964 9.06684 15.7964H9.05526ZM12.5304 15.7964C12.2232 15.7964 11.9286 15.9236 11.7113 16.1501C11.4941 16.3765 11.372 16.6837 11.372 17.004C11.372 17.3243 11.4941 17.6315 11.7113 17.8579C11.9286 18.0844 12.2232 18.2116 12.5304 18.2116H16.0056C16.3129 18.2116 16.6075 18.0844 16.8247 17.8579C17.042 17.6315 17.164 17.3243 17.164 17.004C17.164 16.6837 17.042 16.3765 16.8247 16.1501C16.6075 15.9236 16.3129 15.7964 16.0056 15.7964H12.5304Z"
            fill="white"
          />
        </svg>
      ),
      title: "UX Research",
      content:
        "You will receive a customized plan for your fitness journey, and lots of support.",
    },
    {
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3732 2.51245C11.066 2.51245 10.7714 2.63968 10.5541 2.86616C10.3369 3.09264 10.2148 3.3998 10.2148 3.72009C10.2148 4.04038 10.3369 4.34754 10.5541 4.57402C10.7714 4.8005 11.066 4.92773 11.3732 4.92773H13.69C13.9973 4.92773 14.2919 4.8005 14.5091 4.57402C14.7264 4.34754 14.8484 4.04038 14.8484 3.72009C14.8484 3.3998 14.7264 3.09264 14.5091 2.86616C14.2919 2.63968 13.9973 2.51245 13.69 2.51245H11.3732Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.58008 6.13525C5.58008 5.49468 5.82417 4.88034 6.25865 4.42739C6.69313 3.97444 7.28242 3.71997 7.89687 3.71997C7.89687 4.68083 8.263 5.60233 8.91472 6.28176C9.56645 6.96119 10.4504 7.34289 11.372 7.34289H13.6888C14.6105 7.34289 15.4944 6.96119 16.1462 6.28176C16.7979 5.60233 17.164 4.68083 17.164 3.71997C17.7785 3.71997 18.3678 3.97444 18.8022 4.42739C19.2367 4.88034 19.4808 5.49468 19.4808 6.13525V19.4193C19.4808 20.0598 19.2367 20.6742 18.8022 21.1271C18.3678 21.5801 17.7785 21.8346 17.164 21.8346H7.89687C7.28242 21.8346 6.69313 21.5801 6.25865 21.1271C5.82417 20.6742 5.58008 20.0598 5.58008 19.4193V6.13525ZM9.05526 10.9658C8.74804 10.9658 8.45339 11.093 8.23615 11.3195C8.01891 11.546 7.89687 11.8532 7.89687 12.1734C7.89687 12.4937 8.01891 12.8009 8.23615 13.0274C8.45339 13.2538 8.74804 13.3811 9.05526 13.3811H9.06684C9.37407 13.3811 9.66871 13.2538 9.88595 13.0274C10.1032 12.8009 10.2252 12.4937 10.2252 12.1734C10.2252 11.8532 10.1032 11.546 9.88595 11.3195C9.66871 11.093 9.37407 10.9658 9.06684 10.9658H9.05526ZM12.5304 10.9658C12.2232 10.9658 11.9286 11.093 11.7113 11.3195C11.4941 11.546 11.372 11.8532 11.372 12.1734C11.372 12.4937 11.4941 12.8009 11.7113 13.0274C11.9286 13.2538 12.2232 13.3811 12.5304 13.3811H16.0056C16.3129 13.3811 16.6075 13.2538 16.8247 13.0274C17.042 12.8009 17.164 12.4937 17.164 12.1734C17.164 11.8532 17.042 11.546 16.8247 11.3195C16.6075 11.093 16.3129 10.9658 16.0056 10.9658H12.5304ZM9.05526 15.7964C8.74804 15.7964 8.45339 15.9236 8.23615 16.1501C8.01891 16.3765 7.89687 16.6837 7.89687 17.004C7.89687 17.3243 8.01891 17.6315 8.23615 17.8579C8.45339 18.0844 8.74804 18.2116 9.05526 18.2116H9.06684C9.37407 18.2116 9.66871 18.0844 9.88595 17.8579C10.1032 17.6315 10.2252 17.3243 10.2252 17.004C10.2252 16.6837 10.1032 16.3765 9.88595 16.1501C9.66871 15.9236 9.37407 15.7964 9.06684 15.7964H9.05526ZM12.5304 15.7964C12.2232 15.7964 11.9286 15.9236 11.7113 16.1501C11.4941 16.3765 11.372 16.6837 11.372 17.004C11.372 17.3243 11.4941 17.6315 11.7113 17.8579C11.9286 18.0844 12.2232 18.2116 12.5304 18.2116H16.0056C16.3129 18.2116 16.6075 18.0844 16.8247 17.8579C17.042 17.6315 17.164 17.3243 17.164 17.004C17.164 16.6837 17.042 16.3765 16.8247 16.1501C16.6075 15.9236 16.3129 15.7964 16.0056 15.7964H12.5304Z"
            fill="white"
          />
        </svg>
      ),
      title: "UX Research",
      content:
        "You will receive a customized plan for your fitness journey, and lots of support.",
    },
  ]);

  return (
    <>
      <div className="mb-10 px-10">
        <Slider {...settings}>
          {element.map((el, index) => {
            return (
              <div
                key={index}
                className="bg-Card rounded-[12px] w-[100px] h-[270px] ml-1 p-3 flex"
              >
                <div className="bg-Card border-2 border-Green rounded-full w-[50px] h-[50px] flex justify-center items-center absolute bottom-50 ">
                  {el.icon}
                </div>

                <div className="flex-col mt-10">
                  <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white relative bottom-5">
                    {el.title}
                  </h5>
                  <p className="font-semibold text-xl text-gray-700 dark:text-gray-400 relative bottom-4">
                    {el.content}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Skills;
