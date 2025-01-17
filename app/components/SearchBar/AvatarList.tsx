import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface AvatarListProps {
  avatars: { src: string; alt: string }[];
}

export default function AvatarList({ avatars }: AvatarListProps) {
  return (
    <span className="mx-4 inline-flex items-center -space-x-4">
      {avatars.map((avatar, index) => (
        <Avatar key={index} className="size-11 border lg:size-16">
          <AvatarImage src={avatar.src} alt={avatar.alt} />
        </Avatar>
      ))}
    </span>
  );
}
