export default function ExpertiseTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-3 duration-500 ease-out motion-reduce:animate-none">
      {children}
    </div>
  );
}
