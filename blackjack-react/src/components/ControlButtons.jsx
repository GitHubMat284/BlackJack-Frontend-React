export default function ControlButtons({ status, onHit, onStand }) {
  const getStatusStyle = () => {
    if (!status) return "text-blue-300";

    const s = status.toLowerCase();

    if (s.includes("win")) return "text-green-400 font-bold";
    if (s.includes("bust")) return "text-red-400 font-bold";

    return "text-blue-300";
  };

  return (
    <div className="flex flex-col items-center gap-3 mt-6">
      
      <div className={`text-sm tracking-wide ${getStatusStyle()}`}>
        {status || "In progress..."}
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={onHit}
          className="casino-btn px-5 py-2"
        >
          Hit
        </button>

        <button
          type="button"
          onClick={onStand}
          className="casino-btn px-5 py-2"
        >
          Stand
        </button>
      </div>
    </div>
  );
}