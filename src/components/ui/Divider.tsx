interface DividerProps {
  className?: string;
}

export default function Divider({ className = "" }: DividerProps) {
  return (
    <div
      className={`mx-auto h-px w-[60px] bg-warmth-light ${className}`}
      role="separator"
    />
  );
}
