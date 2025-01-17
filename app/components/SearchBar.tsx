import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { avatars } from "../data/data";

export const SearchBar = ({
  searchInput,
  setSearchInput,
  onSearch,
}: {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <section className="pt-24">
      <div className="container">
        <div className="text-center">
          <div className="text-3xl font-bold md:text-5xl">
            <p className="flex flex-wrap items-center justify-center">
              Find your next meal
              <span className="mx-4 inline-flex items-center -space-x-4">
                {avatars.map((avatar, index) => (
                  <Avatar key={index} className="size-11 border lg:size-16">
                    <AvatarImage src={avatar.src} alt={avatar.alt} />
                  </Avatar>
                ))}
              </span>
              instantly.
            </p>
          </div>
          <div className="max-w-xs md:max-w-xl mx-auto mt-10">
            <Input
              placeholder="Search recipes..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
