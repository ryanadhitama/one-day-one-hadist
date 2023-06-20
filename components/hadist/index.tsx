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
  const hadist = data?.hadist?.split('. ');
  return (
    <Box className="hadist">
      <Box className="hadist__content">
        {hadist?.map((h, i) => (
          <p key={i}>{h}.</p>
        ))}
      </Box>
      <Box className="hadist__author">(HR {data?.author})</Box>
    </Box>
  );
};

export default Hadist;
