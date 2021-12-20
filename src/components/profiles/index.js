import React from "react";
import "./styles.css";
import Hawk from "../../assets/images/Hawkenase.png";
import Lion from "../../assets/images/Lion_King.png";
import Mong from "../../assets/images/Mong.jpg";

import Profile from "./profile";

const team = {
  hawk: {
    position: "Co-Founder & technical development",
    content:
      "+5 years experience in cyber security, blockchain and digital forensics working as a team lead for a big company with 50k+ employees.",
  },
  lion: {
    position: "Co-Founder & Head of Marketing",
    content:
      "+5 years experience in Marketing (media analyst, digital marketing and social media marketing) and working for one of the biggest tv-media companies. Worked in the past with big brands like NFL, Disney, Gold´s Gym and WWE!",
  },
  mong: {
    position: "Art Director & Designer",
    content:
      "Official degree in graphic design (University of China) with +3 years of professional experience in digital drawing. Has drawn as a pseudonym in the past many children's books for major brands.",
  },
};

function Profiles(props) {
  return (
    <div className="profile row">
      <Profile
        border={true}
        name={"Hawkenase"}
        image={Hawk}
        position={team.hawk.position}
        content={team.hawk.content}
      />
      <Profile
        border={true}
        name={"Lion King"}
        image={Lion}
        position={team.lion.position}
        content={team.lion.content}
      />
      <Profile
        border={true}
        name={"Mong"}
        image={Mong}
        position={team.mong.position}
        content={team.mong.content}
      />
      {/* <Profile border={true} name={"Lion King"} image={Lion} />
      <Profile border={false} name={"Mong"} image={Mong} /> */}
    </div>
  );
}

export default Profiles;
