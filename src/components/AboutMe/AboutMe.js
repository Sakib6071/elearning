import React from "react";

const AboutMe = () => {
  return (
    <div className=" text-black py-10 bg-gray-50 px-10">
      <p className=" text-green-400 text-center text-3xl font-semibold py-5">
        About Me
      </p>
      <div className=" border-2 shadow-lg my-5 bg-white rounded-lg p-5 grid grid-cols-1 lg:grid-cols-4">
        <div>
          <img
            className=" w-40"
            src={"https://i.ibb.co/1Tc3pXp/my-passport-photo.jpg"}
            alt=""
          />
          <p className="mt-2">Name : Habib Ullah</p>
          <p>Phone : 01627313890</p>
          <p>Email : habibullah6071@gmail.com</p>
        </div>
        <div className=" lg:col-span-3 py-5">
          <span className=" font-semibold text-xl">Future Goal</span>
          <ol>
            <li className="my-2">
              To provide high-quality education to students from class 6 to 10
              and help them achieve their academic goals.
            </li>
            <li className="my-2">
            To continue to grow and expand your online tutoring services, reaching more students and making quality education accessible to all.
            </li>
            <li className="my-2">
            To continuously improve the online learning experience for your students, using innovative technology and teaching methods to engage and motivate them.
            </li>
            <li className="my-2">
            To build a strong reputation as a reliable and effective tutor, helping to increase enrollment and strengthen your business.
            </li>
            <li className="my-2">
            To build a team of highly skilled and dedicated tutors who can provide the same level of quality education that you do.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
