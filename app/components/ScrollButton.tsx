'use client';

export default function ScrollButton() {
  function handleClick() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="overflow-hidden mt-8">
      <button
        onClick={handleClick}
        className="reveal-bottom border border-white/60 text-white/90 text-sm px-6 py-2.5 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
        style={{ animationDelay: "420ms" }}
      >
        view projects
      </button>
    </div>
  );
}
