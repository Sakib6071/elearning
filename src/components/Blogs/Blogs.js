import React from "react";

const Blogs = () => {
  return (
    <div className="pt-5 pb-10 bg-gray-500 text-white md:px-20">
      <p className=" text-green-400 text-center text-3xl font-semibold py-5 ">
        Blogs
      </p>
      <div>
        <p className="question font-semibold text-xl">
          1. Difference between 'authorization' and 'authentication'
        </p>
        <p className="answer mt-2">
          Answer: Authentication is the process of verifying the identity of a
          user, device, or system. It involves providing proof of identity
          through credentials such as a username and password, biometric data,
          or smart card. <br></br>
          Authorization, on the other hand, is the process of determining what a
          user is allowed to do once their identity has been verified. It
          involves granting access to certain resources, actions, or services
          based on the user's role, permissions, or privileges.{" "}
        </p>
      </div>
      <div className=" my-10">
        <p className="question font-semibold text-xl">
          2. Why are you using 'firebase'? What other options do you have to
          implement authentication?
        </p>
        <p className="answer mt-2">
          Answer: Basically I use firebase for authentication and also for
          hosting my site. Here has some variety of type for authentication, for
          example : Email Password, Google, Github, Facebook etc. <br />
          And there are some other option for authentication of firebase. Like
          "AWS cognito, Auth0, Okta, etc"
        </p>
      </div>
      <div>
        <p className="question font-semibold text-xl">
          3. What other services does 'firebase' provide other than
          authentication
        </p>
        <p className="answer mt-2">Answer: Firebase also provides hosting, you can host your site using firebase. And firebase also provides analytics. You can track your user using firebase. Besides it provides many other services, like realtime database, cloud storage, etc.</p>
      </div>
    </div>
  );
};

export default Blogs;
