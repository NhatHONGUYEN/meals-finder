import { Input } from "@/components/ui/input";

interface SearchInputProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}

export default function SearchInput({
  searchInput,
  setSearchInput,
  onSearch,
}: SearchInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <Input
      placeholder="Search recipes..."
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      onKeyDown={handleKeyPress}
    />
  );
}
