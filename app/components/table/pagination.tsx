import React from 'react'
import { PaginationProps } from '@/types/types';
  
const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }: PaginationProps) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    let startPage = Math.max(currentPage - 1, 1);
    let endPage = Math.min(startPage + 2, totalPages);
  
    if (endPage - startPage < 2) {
      startPage = Math.max(endPage - 2, 1);
    }
  
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
  
    return (
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a onClick={() => paginate(currentPage - 1)} href="#" className="page-link">
              &lsaquo;
            </a>
          </li>
          {pageNumbers.map((number) => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <a onClick={() => paginate(number)} href="#" className="page-link">
                {number}
              </a>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <a onClick={() => paginate(currentPage + 1)} href="#" className="page-link">
              &rsaquo;
            </a>
          </li>
        </ul>
    );
};

export default Pagination
