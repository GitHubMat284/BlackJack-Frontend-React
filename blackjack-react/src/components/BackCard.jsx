export default function BackCard() {
  return (
    <div className="relative w-24 h-32 rounded-lg border gold-ring shadow-lg overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(234,179,8,0.25),transparent_60%)]" />
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-8 opacity-20">
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            <div className="w-1.5 h-1.5 rotate-45 bg-yellow-400/40" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-yellow-400/70 text-sm tracking-[0.1em] font-bold rotate-[-8deg]">
          MATHEO<br/>STUDIOS
        </div>
      </div>
      <div className="absolute top-1 left-2 text-yellow-400/40 text-xs font-bold">
        ♠
      </div>
      <div className="absolute bottom-1 right-2 text-yellow-400/40 text-xs font-bold rotate-180">
        ♠
      </div>
    </div>
  );
}