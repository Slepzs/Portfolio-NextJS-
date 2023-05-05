export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[2000px] grid mx-auto py-20">{children}</div>;
}
