export const Prose: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="max-w-none prose prose-a:text-pink-400 dark:prose-invert text-justify">
      {children}
    </div>
  );
};
