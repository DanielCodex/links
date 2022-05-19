function Link({ link, children }) {
  return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center mb-3 rounded-lg bg-[#1a1d23] p-2 w-1/2"
      >
        {children}
      </a>
  );
}

export default Link;
