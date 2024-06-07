export type Task = {
    id: string;
    todo: string;
    createdBy: string;
    completed: boolean;
    priority: string;
    createdAt: string;
};

export  type PaginationProps = {
    itemsPerPage: number;
    totalItems: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
};

export type Total = {
    low: number;
    medium: number;
    high: number;
}
  