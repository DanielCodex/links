// for centering the entire element in the middle
function Container({ children }) {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-[#16181d]">
      {children}
    </div>
  );
}

export default Container;
