import React from "react";
import { Navigate } from "react-router-dom";
import AdminPortal from "../Admin/Sidebar/AdminPortal";
import AgentPortal from "../Agent/Sidebar/AgentPortal";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ usertypeRequired }) => {
    const token = localStorage.getItem("token");
    const usertype = localStorage.getItem("usertype");

    const navigate = useNavigate();

    if (!token) {
        return <Navigate to="/" />;
    }

    const cleanString = (input) => input.replace(/[^a-zA-Z]/g, "");
    const usertypeCleaned = cleanString(usertype);

    const userTypes = Array.isArray(usertypeRequired)
        ? usertypeRequired
        : [usertypeRequired];

    console.log(usertypeCleaned)

    if (userTypes.includes(usertypeCleaned)) {
        switch (usertypeCleaned) {
            case "Admin":
                return <AdminPortal />;
            case "Agent":
                return <AgentPortal />;
            default:
                return <Navigate to="/" />;
        }
    } else {
        return <Navigate to="/" />;
    }
};

export default ProtectedRoute;