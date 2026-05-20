import Card from "./Card";
import BackCard from "./BackCard";

export default function Hand({ title, cards = [], total }) {
  const isDealer = title?.toLowerCase().includes("dealer");
  const showHiddenCard = isDealer && cards.length === 1;
  const specialTotal = total > 21 ? "text-red-500" : total === 21 ? "shimmer" : "text-yellow-300";

  return (
    <div className="p-4 rounded-lg w-full">
      <h2 className="text-2xl font-bold mb-3 flex justify-center items-center gap-5">
        <span className="text-white">{title}</span>
        <span className={specialTotal}>{total}</span>
      </h2>

      <div className="flex justify-center gap-2 flex-wrap">
        {cards.map((c, i) => (
          <Card key={i} card={c} />
        ))}

        {showHiddenCard && <BackCard />}
      </div>
    </div>
  );
}