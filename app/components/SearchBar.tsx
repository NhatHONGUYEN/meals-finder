import { Input } from "@/components/ui/input";

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
    <div className="w-52 py-10">
      <Input
        placeholder="Type your search..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};
