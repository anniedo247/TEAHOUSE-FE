import React from 'react';
import Pagination from '@material-ui/lab/Pagination';


function PaginationBar({ pageNum, setPageNum, totalPages }) {
  const handleChange = (event, value) => {
    setPageNum(value);
  };

  return (
    <div className="d-flex justify-content-center mt-4 mb-4">
      <Pagination
        count={totalPages}
        variant="outlined"
        page={pageNum}
        onChange={handleChange}
      />
    </div>
  );
}

export default PaginationBar
