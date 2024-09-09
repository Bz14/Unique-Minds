import React from "react";
import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";

const CourseCard = ({ title, description, imageUrl, courseId }) => {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link
        to={`/courses/${courseId}`}
        className="inline-flex items-center text-blue-500 hover:text-blue-600 font-semibold"
      >
        <FaBookOpen className="mr-2" />
        Show More
      </Link>
    </div>
  );
};

export default CourseCard;
