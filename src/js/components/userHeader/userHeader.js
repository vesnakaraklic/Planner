import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userActions } from "../../store/actions/user.actions";

export default function UserHeader() {
  const dispatch = useDispatch();
  const history = useHistory();

  const onClick = () => {
    dispatch(userActions.logout()).then(() => {
      history.push("/login");
    });
  };

  return (
    <>
      <div className="header">
        <p className="logo_planner"> Planner</p>
        <p className="user-header-name">Vesna Karaklic</p>
        <button onClick={onClick} className="user-header-profile">
          {" "}
          <FontAwesomeIcon icon={faUser} style={{ color: "white" }} />
        </button>
      </div>
    </>
  );
}
