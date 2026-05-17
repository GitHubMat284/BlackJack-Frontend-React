export default function ControlButtons({onHit, onStand }) {

  return (
    <div className="flex flex-col items-center gap-3 mt-6">

      <div className="flex gap-4">
        <button
          type="button"
          onClick={onHit}
          className="casino-btn px-5 py-2 text-green-900"
        >
          <b>Hit</b>
        </button>

        <button
          type="button"
          onClick={onStand}
          className="casino-btn px-5 py-2 text-red-900"
        >
          <b>Stand</b>
        </button>
      </div>
    </div>
  );
}