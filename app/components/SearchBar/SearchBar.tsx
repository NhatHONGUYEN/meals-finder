import { MdFastfood } from "react-icons/md";
import SearchInput from "./SearchInput";
import { Avatar } from "@/components/ui/avatar";

export default function SearchBar({
  searchInput,
  setSearchInput,
  onSearch,
}: {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}) {
  return (
    <section className="pt-24">
      <div className="container">
        <div className="text-center">
          <div className="text-3xl font-bold md:text-5xl">
            <p className="flex flex-wrap items-center justify-center">
              Find your next meal
              <Avatar className="mx-4 border-2 ">
                <MdFastfood aria-label="Burger" />
              </Avatar>
              instantly.
            </p>
          </div>
          <div className="max-w-xs md:max-w-xl mx-auto mt-10">
            <SearchInput
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              onSearch={onSearch}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
