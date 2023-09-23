import {
  InstagramIcon,
  FacebookIcon,
  SoundcloudIcon,
  SpotifyIcon,
} from "./icons";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-6">
      <Link href="https://www.facebook.com" className="group">
        <FacebookIcon className="group-hover:fill-electric-violet-600 transition-colors" />
      </Link>
      <Link href="https://www.instagram.com" className="group">
        <InstagramIcon className="group-hover:fill-electric-violet-600 transition-colors" />
      </Link>
      <Link href="https://www.soundcloud.com" className="group">
        <SoundcloudIcon className="group-hover:fill-electric-violet-600 transition-colors" />
      </Link>
      <Link href="https://www.spotify.com" className="group">
        <SpotifyIcon className="group-hover:fill-electric-violet-600 transition-colors" />
      </Link>
    </div>
  );
};

export default Socials;
