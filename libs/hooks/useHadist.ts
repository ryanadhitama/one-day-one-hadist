import { authorMapper } from '@libs/mapper/hadist';

export const useHadist = () => {
  const { author, filename, min, max } = authorMapper('AbuDaud');
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  const data = filename[randomNumber];

  return {
    id: data?.number as number,
    hadist: data?.id,
    author: author
  };
};
