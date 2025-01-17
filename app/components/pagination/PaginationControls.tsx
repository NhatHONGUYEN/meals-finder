import {
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationControlsProps {
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  isNext?: boolean;
}

export default function PaginationControls({
  currentPage,
  setPage,
  totalPages,
  isNext = false,
}: PaginationControlsProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setPage((prev) =>
      isNext ? Math.min(prev + 1, totalPages) : Math.max(prev - 1, 1)
    );
  };

  const isDisabled = isNext ? currentPage === totalPages : currentPage === 1;

  return (
    <PaginationItem>
      {isNext ? (
        <PaginationNext
          onClick={handleClick}
          className={isDisabled ? "disabled" : "cursor-pointer"}
        />
      ) : (
        <PaginationPrevious
          onClick={handleClick}
          className={isDisabled ? "disabled" : "cursor-pointer"}
        />
      )}
    </PaginationItem>
  );
}
