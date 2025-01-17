import { Pagination, PaginationContent } from "@/components/ui/pagination";
import PaginationControls from "./PaginationControls";
import PaginationPages from "./PaginationPage";

interface CustomPaginationProps {
  totalPages: number;
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function CustomPagination({
  totalPages,
  currentPage,
  setPage,
}: CustomPaginationProps) {
  return (
    <Pagination className="py-32">
      <PaginationContent>
        <PaginationControls
          currentPage={currentPage}
          setPage={setPage}
          totalPages={totalPages}
        />
        <PaginationPages
          totalPages={totalPages}
          currentPage={currentPage}
          setPage={setPage}
        />
        <PaginationControls
          currentPage={currentPage}
          setPage={setPage}
          totalPages={totalPages}
          isNext
        />
      </PaginationContent>
    </Pagination>
  );
}
