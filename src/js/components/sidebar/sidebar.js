import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { userActions } from "../../store/actions/user.actions";
import "./sidebar.scss";

export default function Sidebar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const onClick = () => {
    dispatch(userActions.logout()).then(() => {
      history.push("/login");
    });
  };

  return (
    <>
      <div className="sidebar">
        <button onClick={onClick} className="user-header-profile">
          {" "}
          <FontAwesomeIcon icon={faUser} style={{ color: "white" }} />
        </button>
      </div>
    </>
  );
}
