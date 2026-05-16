export default function Hand({ title, cards, total }) {
  return (
    <div className="bg-emerald-800 p-4 rounded-lg w-full">
      <h2 className="text-xl font-bold mb-2">
        {title} ({total})
      </h2>

      <div className="flex gap-2 flex-wrap">
        {cards.map((c, i) => (
          <div
            key={i}
            className="bg-white text-black p-2 rounded w-14 text-center"
          >
            <div>{c.rank}</div>
            <div>{c.suit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}