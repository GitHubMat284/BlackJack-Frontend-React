import React, { useEffect } from "react";

function MoreInfoModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border gold-ring backdrop-brightness-200 p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-yellow-300 tracking-wide">
            Project Links ♦
          </h2>

          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-yellow-300 text-xl"
          >✕</button>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href="https://www.youtube.com/watch?v=eyoh-Ku9TCI"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-300/40 transition text-white"
          >How to Play?</a>
          <a
            href="https://github.com/GitHubMat284/BlackJack-Frontend-React"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-300/40 transition text-white"
          >Frontend Repository</a>

          <a
            href="https://github.com/GitHubMat284/BlackJack-Backend"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-300/40 transition text-white"
          >Backend Repository</a>

          <a
            href="https://www.matheodev.ca"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-300/40 transition text-white"
          >Portfolio Website</a>
        </div>

        <p className="text-xs text-neutral-500 mt-5 text-center">
          Click outside to close
        </p>
      </div>
    </div>
  );
}

export default MoreInfoModal;