import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';
import Box from '@components/box';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box className="footer">
      <Box className="footer__copyright">© {year} Hadist of The Day</Box>{' '}
      <Link target="_blank" href="https://github.com/ryanadhitama/one-day-one-hadist">
        <AiFillGithub />
      </Link>
    </Box>
  );
};

export default Footer;
