import React from "react";
import "./styles.css";
import Hawk from "../../assets/images/Hawkenase.png";
import Lion from "../../assets/images/Lion_King.png";
import Mong from "../../assets/images/Mong.jpg";

import Profile from "./profile";

function Profiles(props) {
  return (
    <div className="profile row">
      <Profile border={true} name={"Hawkenase"} image={Hawk} />
      <Profile border={true} name={"Lion King"} image={Lion} />
      <Profile border={false} name={"Mong"} image={Mong} />
    </div>
  );
}

export default Profiles;
