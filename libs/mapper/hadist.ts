import abuDaud from '@data/hadist/abu-daud';

export const authorMapper = (name: string) => {
  let author = 'Abu Daud';
  let min = 0;
  let max = 4589;
  let filename = abuDaud;

  switch (name) {
    case 'AbuDaud': {
      author = 'Abu Daud';
      min = 0;
      max = 4589;
      filename = abuDaud;
      break;
    }
    default: {
    }
  }

  return {
    author,
    min,
    max,
    filename
  };
};
