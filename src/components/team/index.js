import React from "react";
import "./styles.css";

function Team() {
  return (
    <section className="team-container row">
      <div className="team-left-container title">
        <h2>WHO ARE WE?</h2>
        <h1>TEAM SHIBARMY</h1>
      </div>
      <div className="team-right-container content">
        <p>
          Hey ShibArmy, we are Hawkenase, Lion__King and Mong, three friends
          from all over the world with a common passion – the meme coin{" "}
          <span className="shib">$SHIB!</span> We created this great and unique
          NFT project with the goal of creating wealth for all, not just for the
          richest! We have been working hard to establish a unique roadmap and
          we're continuously looking for new ways to push ourselves. Join our
          trip to the moon!
        </p>
      </div>
    </section>
  );
}

export default Team;
