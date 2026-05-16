export default function ControlButtons({ status, onHit, onStand }) {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button onClick={onHit} className="bg-green-600 px-4 py-2 rounded">
        Hit
      </button>

      <button onClick={onStand} className="bg-red-600 px-4 py-2 rounded">
        Stand
      </button>

      <div className="ml-4 opacity-80">
        {status}
      </div>
    </div>
  );
}