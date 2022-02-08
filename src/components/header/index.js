import React from "react";
import "./styles.css";
import HeaderVideo from "../../assets/videos/Banner.mp4";
import { VideoScroll } from "react-video-scroll";

export default function Header() {
  // const handleScroll = () => {
  //   setDivStyle({ transform: `translateY(${window.scrollY}px)` })
  // }

  // const [divStyle, setDivStyle] = useState({ transform: 'translateY(0px)' })

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);

  //   };
  // }, []);

  return (
    <section className="header-section">
      <VideoScroll playbackRate={180}>
        <video
          className="header-video"
          tabIndex="0"
          preload="preload"
          muted
          playsInline
        >
          <source src={HeaderVideo} type="video/mp4" />
        </video>
      </VideoScroll>
    </section>
  );
}
