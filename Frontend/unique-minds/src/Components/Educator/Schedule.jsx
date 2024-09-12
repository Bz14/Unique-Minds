import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaUser, FaGoogle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const sampleSchedules = [
  {
    id: "1",
    date: "2024-01-15T10:00:00",
    studentName: "John Doe",
    googleMeetLink: "https://meet.google.com/abc-defg-hij",
  },
  {
    id: "2",
    date: "2024-02-20T14:00:00",
    studentName: "Jane Smith",
    googleMeetLink: "https://meet.google.com/xyz-uvwz-klm",
  },
];

const Schedule = () => {
  const [schedules, setSchedules] = useState(sampleSchedules);

  useEffect(() => {
    const fetchSchedules = async () => {
      const token = localStorage.getItem("access_token");
      try {
        const response = await fetch(
          "http://localhost:8080/api/educator/schedules",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch schedules");
        }
        const data = await response.json();
        setSchedules(data);
      } catch (error) {
        console.error("Error fetching schedules:", error);
      }
    };

    fetchSchedules();
  }, []);

  const handleCancelSchedule = async (id) => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(
        `http://localhost:8080/api/educator/schedules/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to cancel schedule");
      }
      setSchedules(schedules.filter((schedule) => schedule.id !== id));
    } catch (error) {
      console.error("Error canceling schedule:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-customBlue">Schedule</h2>

      <div className="space-y-6">
        {schedules.length > 0 ? (
          schedules.map((schedule) => (
            <div
              key={schedule.id}
              className="bg-customBlue p-4 rounded-lg shadow-md flex items-start justify-between border border-gray-200"
            >
              <div className="flex flex-col space-y-2 w-full">
                <div className="flex items-center space-x-2">
                  <FaUser className="text-white" />
                  <h3 className="text-xl font-semibold text-white">
                    {schedule.studentName}
                  </h3>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <FaCalendarAlt />
                  <p>{new Date(schedule.date).toLocaleString()}</p>
                </div>
                <a
                  href={schedule.googleMeetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:underline"
                >
                  <FaGoogle className="mr-1" />
                  Join via Google Meet
                </a>
              </div>

              <button
                onClick={() => handleCancelSchedule(schedule.id)}
                className="flex items-center justify-center py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
              >
                <MdCancel className="mr-2" />
                Cancel
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-700">No schedules available.</p>
        )}
      </div>
    </div>
  );
};

export default Schedule;
