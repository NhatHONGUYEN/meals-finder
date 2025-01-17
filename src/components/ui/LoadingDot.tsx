export default function LoadingDot() {
  return (
    <div className="flex flex-row gap-2">
      <div className="w-4 h-4 rounded-full animate-bounce [animation-delay:.7s]"></div>
      <div className="w-4 h-4 rounded-full animate-bounce [animation-delay:.3s]"></div>
      <div className="w-4 h-4 rounded-full animate-bounce [animation-delay:.7s]"></div>
    </div>
  );
}
