import { Avatar } from "@/components/ui/avatar";
import { avatars } from "../../data/data";

export default function AvatarList() {
  return (
    <span className="mx-4 inline-flex items-center -space-x-4">
      {avatars.map((avatar, index) => (
        <Avatar key={index} className="size-11 border lg:size-16">
          {avatar.icon}
        </Avatar>
      ))}
    </span>
  );
}
