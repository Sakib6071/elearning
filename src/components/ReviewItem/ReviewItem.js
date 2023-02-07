import {
  faStar,
  faStarHalfAlt,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";

const ReviewItem = ({ review }) => {
  const { name, classes, rating, description, photo } = review;

  return (
    <motion.div whileHover={{ scale: 1.2 }} className=" grid grid-cols-3 bg-white rounded-lg mx-2 p-3">
      <div className="text-center mr-2">
        <img
          width={"80px"}
          className="mx-auto rounded-full"
          src={photo}
          alt=""
        />
        <p className="font-semibold">{name}</p>
        <p className="font-semibold">Class : {classes}</p>
        <>
          {rating === 5 ? (
            <div>
              <FontAwesomeIcon icon={faStar} color="#FFD700"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} color="#FFD700"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} color="#FFD700"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} color="#FFD700"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} color="#FFD700"></FontAwesomeIcon>
            </div>
          ) : (
            <div>
              {rating == 4 ? (
                <div>
                  <FontAwesomeIcon
                    icon={faStar}
                    color="#FFD700"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faStar}
                    color="#FFD700"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faStar}
                    color="#FFD700"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faStar}
                    color="#FFD700"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faStarHalfStroke}
                    color="#FFD700"
                  ></FontAwesomeIcon>
                </div>
              ) : (
                <div>
                  <FontAwesomeIcon
                    icon={faStar}
                    color="#FFD700"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faStar}
                    color="#FFD700"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faStar}
                    color="#FFD700"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faStarHalfAlt}
                    color="#FFD700"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faStarHalfStroke}
                    color="#FFD700"
                  ></FontAwesomeIcon>
                </div>
              )}
            </div>
          )}
        </>
      </div>
      <div className=" col-span-2 flex items-center">
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default ReviewItem;
