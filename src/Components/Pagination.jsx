import React from 'react';
import { Button} from '@chakra-ui/react';

function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({ totalPages, handlePageChange, currentPage }) {
  const pages = createArrayOfSize(totalPages).map((_, i) => (
   
    <Button
    m={"22px"}
    colorScheme='pink'
      key={i + 1}
      value={i + 1}
      disabled={i === currentPage - 1}
      onClick={() => handlePageChange(i + 1)}
    >
      {i + 1}
    </Button>

  ));

  return <div>{pages}</div>;
}

export default Pagination;
