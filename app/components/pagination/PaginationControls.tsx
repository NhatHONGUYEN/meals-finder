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
    e.preventDefault(); // Empêche le rechargement de la page
    setPage((prev) =>
      isNext ? Math.min(prev + 1, totalPages) : Math.max(prev - 1, 1)
    );
  };

  const isDisabled = isNext ? currentPage === totalPages : currentPage === 1;

  // Générer l'URL de la page suivante ou précédente
  const href = isNext
    ? `/page/${Math.min(currentPage + 1, totalPages)}`
    : `/page/${Math.max(currentPage - 1, 1)}`;

  return (
    <PaginationItem>
      {isNext ? (
        <PaginationNext
          href={href} // URL pour le SEO et les utilisateurs
          onClick={handleClick}
          className={isDisabled ? "disabled" : "cursor-pointer"}
          aria-disabled={isDisabled} // Accessibilité
        >
          Next
        </PaginationNext>
      ) : (
        <PaginationPrevious
          href={href} // URL pour le SEO et les utilisateurs
          onClick={handleClick}
          className={isDisabled ? "disabled" : "cursor-pointer"}
          aria-disabled={isDisabled} // Accessibilité
        >
          Previous
        </PaginationPrevious>
      )}
    </PaginationItem>
  );
}
