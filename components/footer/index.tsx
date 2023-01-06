import { AiFillGithub } from 'react-icons/ai';
import { BiSun, BiMoon } from 'react-icons/bi';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Box from '@components/box';

const Footer = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <Box className="footer">
      <Box className="footer__copyright">© {year} Hadist of The Day</Box>{' '}
      <Box className="footer__icon">
        <Box
          onClick={() => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
          }}
        >
          {resolvedTheme === 'dark' ? <BiSun /> : <BiMoon />}
        </Box>
        <Link target="_blank" href="https://github.com/ryanadhitama/one-day-one-hadist">
          <AiFillGithub />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
