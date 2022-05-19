function Container({ children }) {
  return (
    <div className="flex  h-screen w-screen items-center justify-center bg-[#16181d]">
      {children}
    </div>
  );
}

export default Container;
