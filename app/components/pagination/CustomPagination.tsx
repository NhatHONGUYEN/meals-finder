import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const CustomPagination = ({
  totalPages,
  currentPage,
  setPage,
}: {
  totalPages: number;
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <Pagination className="py-32">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={(e) => {
              e.preventDefault();
              setPage((prev) => Math.max(prev - 1, 1)); // Décrémente la page mais ne descend pas sous 1
            }}
            className={currentPage === 1 ? "disabled" : "cursor-pointer"} // Ajoute une classe "disabled" si la page est déjà à 1
          />
        </PaginationItem>

        {/* Affichage des pages */}
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                className="cursor-pointer" // Ajoute une classe "cursor-pointer" pour indiquer que c'est cliquable
                onClick={(e) => {
                  e.preventDefault();
                  setPage(pageNumber); // Met à jour la page au clic
                }}
                isActive={currentPage === pageNumber} // Marque la page active
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            onClick={(e) => {
              e.preventDefault();
              setPage((prev) => Math.min(prev + 1, totalPages)); // Incrémente la page mais ne dépasse pas le total des pages
            }}
            className={
              currentPage === totalPages ? "disabled" : "cursor-pointer"
            } // Ajoute une classe "disabled" si la page est déjà à la dernière page
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
