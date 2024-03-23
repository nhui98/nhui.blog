export default function Component() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-1">
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="bg-blue-600 p-4 text-zinc-50">
          Grid item {i + 1}
        </div>
      ))}
    </div>
  );
}
