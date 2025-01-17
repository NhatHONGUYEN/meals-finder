import { HERO_VIDEO_SRC } from "../../constants/Constants";

export default function HeroVideo() {
  return (
    <div className="w-full h-full">
      <video
        src={HERO_VIDEO_SRC}
        className="w-full h-full rounded-lg object-cover"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
}
