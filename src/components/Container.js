// for centering the entire element in the middle
function Container({ children }) {
  return (
    <div className="flex bg-white flex-col h-screen w-screen items-center justify-center dark:bg-[#16181d] md:mt-16">
      {children}
    </div>
  );
}

export default Container;
