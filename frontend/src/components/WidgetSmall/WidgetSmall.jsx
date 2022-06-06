import { Visibility } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { selectUserState } from "../../store/userSlice";
import { useSelector } from "react-redux";

import "./widgetSmall.css";
import { Link } from "react-router-dom";

const WidgetSmall = () => {
  const [users, setUsers] = useState([]);
  const { userInfo } = useSelector(selectUserState);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("/users/?new=true", {
          headers: {
            "x-access-token": userInfo.token,
          },
        });
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [userInfo.token]);

  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Join Members</span>
      <ul className="widgetSmallList">
        {users?.map((user) => (
          <li className="widgetSmallListItem" key={user._id}>
            <img
              src="https://www.slotcharter.net/wp-content/uploads/2020/02/no-avatar.png"
              alt=""
              className="widgetSmallImg"
            />
            <div className="widgetSmallUser">
              <span className="widgetSmallUsername">{user.username}</span>
            </div>
            <Link to={`/users/${user._id}`} >
            <button className="widgetSmallButton" >
              <Visibility className="widgetSmallIcon" />
              Display
            </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSmall;