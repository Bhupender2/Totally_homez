import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const PaginationComponent = ({ data, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(0);

    // Calculate total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Get current items based on currentPage and itemsPerPage
    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const handlePageChange = (selectedPage) => setCurrentPage(selectedPage.selected);

    return (
        <div>
            {/* Render your data */}
            {currentItems.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}

            {/* Pagination */}
            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageCount={totalPages}
                onPageChange={handlePageChange}
                containerClassName="pagination"
                activeClassName="active"
            />
        </div>
    );
};


export default PaginationComponent;
