export default function GameStatus({ status }) {
  const getStatusStyle = () => {
    if (!status) return "bg-blue-600 text-white";

    switch (status) {
      case "PlayerWin":
      case "DealerBust":
        return "bg-green-600 text-white";

      case "DealerWin":
      case "PlayerBust":
        return "bg-red-600 text-white";

      case "Push":
        return "bg-yellow-500 text-black";

      case "PlayerTurn":
      case "DealerTurn":
        return "bg-blue-600 text-white";

      default:
        return "bg-gray-600 text-white";
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className={`w-full text-xl max-w-prose py-3 rounded-md font-bold shadow-md text-center ${getStatusStyle()}`}
      >
        {status}
      </div>
    </div>
  );
}