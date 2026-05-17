const symbol = {
  Spades: "♠",
  Hearts: "♥",
  Diamonds: "♦",
  Clubs: "♣"
};

const shortRank = {
  Ace: "A",
  King: "K",
  Queen: "Q",
  Jack: "J",
  Ten: "10",
  Nine: "9",
  Eight: "8",
  Seven: "7",
  Six: "6",
  Five: "5",
  Four: "4",
  Three: "3",
  Two: "2"
};

const color = (suit) =>
  suit === "Hearts" || suit === "Diamonds" ? "#d33" : "#111";

export default function Card({ card }) {
  return (
    <div
      className="relative w-14 h-20 bg-white rounded-md shadow-md border"
      style={{ color: color(card.Suit) }}
    >
      <div className="absolute top-1 left-1 text-xs font-bold">
        {shortRank[card.Rank]} {symbol[card.Suit]}
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-xl">
        {symbol[card.Suit]}
      </div>

      <div className="absolute bottom-1 right-1 text-xs font-bold rotate-180">
        {shortRank[card.Rank]} {symbol[card.Suit]}
      </div>
    </div>
  );
}