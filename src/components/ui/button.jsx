const Button = ({ children, className, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-colors 
          ${className || "bg-purple-600 hover:bg-purple-700 text-white"}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
