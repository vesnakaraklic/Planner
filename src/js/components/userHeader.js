import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserHeader() {
  return (
    <>
      <div className="header">
        <p className="logo_planner"> Planner</p>
        <p className="user-header-name">Vesna Karaklic</p>
        <button className="user-header-profile">
          {" "}
          <FontAwesomeIcon icon={faUser} style={{ color: "white" }} />
        </button>
      </div>
    </>
  );
}
