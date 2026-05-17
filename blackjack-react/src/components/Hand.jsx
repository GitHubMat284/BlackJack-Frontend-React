import Card from "./Card";

export default function Hand({ title, cards = [], total }) {
  return (
    <div className="bg-emerald-800 p-4 rounded-lg w-full">
      <h2 className="text-lg font-semibold mb-3 flex justify-between">
        <span>{title}</span>
        <span className="text-yellow-300">{total}</span>
      </h2>

      <div className="flex gap-2 flex-wrap">
        {cards.map((c, i) => (
          <Card key={i} card={c} />
        ))}
      </div>
    </div>
  );
}