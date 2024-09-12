import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutContent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/auth/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to log out");
        }

        localStorage.removeItem("access_token");
        navigate("/");
      } catch (error) {
        console.error("Error logging out:", error);
        navigate("/");
      }
    };

    logout();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default LogoutContent;
