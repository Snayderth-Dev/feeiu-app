const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="text-center text-gray-400 text-[12px] mb-5 flex justify-center items-center gap-2"
      aria-label="Footer with copyright information"
    >
      <LogoFooter />
      &#169;
      {year} Designed by
      <span className="font-bold text-gray-300 font-principial">Snayderth</span>
    </footer>
  );
};

const LogoFooter = () => {
  return <img src="/images/logo.png" alt="Logo de FeeIU" className="max-w-5" />;
};

export default Footer;
