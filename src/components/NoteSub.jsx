const NoteSub = ({ first, second, third }) => {
  return (
    <div className="flex justify-center md:justify-start">
      <span className="subtitle-note">
        {first}
        {second}
        {third}
      </span>
    </div>
  );
};

export default NoteSub;
