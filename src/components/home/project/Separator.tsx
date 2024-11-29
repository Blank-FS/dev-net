const Separator = (className: { className?: string }) => {
  return (
    <div
      className={`border shrink-0 bg-border h-[1px] w-full my-4 ${className}`}
    ></div>
  );
};

export default Separator;
