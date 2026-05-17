import Card from "./Card";

export default function Hand({ title, cards = [], total }) {
  const specialTotal = total > 21 ? "text-red-900" : total === 21 ? "shimmer" : "text-yellow-300";
  return (
    <div className=" p-4 rounded-lg w-full">
      <h2 className="text-2xl font-bold mb-3 flex justify-between">
        <span className="text-white">{title}</span>
        <span className={specialTotal}>{total}</span>
      </h2>

      <div className="flex gap-2 flex-wrap">
        {cards.map((c, i) => (
          <Card key={i} card={c} />
        ))}
      </div>
    </div>
  );
}