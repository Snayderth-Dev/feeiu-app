const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="text-center text-gray-400 text-[12px] mb-5"
      aria-label="Footer with copyright information"
    >
      &#169;{year} Designed by{" "}
      <span className="font-bold text-gray-300 font-principial">Snayderth</span>
    </footer>
  );
};

export default Footer;
