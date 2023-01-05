import Box from '@components/box';

const Footer = () => {
  const year = new Date().getFullYear();
  return <Box className="footer">© {year} Hadist of The Day</Box>;
};

export default Footer;
