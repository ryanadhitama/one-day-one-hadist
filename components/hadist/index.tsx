import React from 'react';
import Box from '@components/box';

interface IHadist {
  data: {
    id: number;
    hadist: string;
    author: string;
  };
}

const Hadist: React.FC<IHadist> = ({ data }) => {
  return (
    <Box className="hadist">
      <Box className="hadist__content">{data?.hadist}</Box>
      <Box className="hadist__author">(HR {data?.author})</Box>
    </Box>
  );
};

export default Hadist;
