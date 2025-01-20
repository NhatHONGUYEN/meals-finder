import { HERO_VIDEO_SRC } from "../../constants/Constants";

export default function HeroVideo() {
  const isMobile = window.innerWidth <= 768;
  const videoSrc = isMobile
    ? HERO_VIDEO_SRC.replace(".mp4", "-mobile.mp4")
    : HERO_VIDEO_SRC;

  return (
    <div className="w-96 h-96  mx-auto">
      <video
        src={videoSrc}
        className="w-full h-full rounded-lg object-cover"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  );
}
