export const HomePage = () => {
  return (
    <>
      <div>
        <div className="flex gap-3 items-center py-3">
          <h2 className="text-3xl font-bold">Hello, Welcome to</h2>
          <button className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-100 duration-30 border-2 border-gray-800 hover:border-cyan-200 hover:font-bold rounded-xl py-1 px-2">
            Let's surf
          </button>
        </div>
        <h1 className="font-ultra text-5xl text-gray-800">STYLEYOO/NEK</h1>
        <p className="mt-2 text-xl font-medium">
          List Style UI Component for React.js using Tailwindcss
        </p>
      </div>

      <div>
        <h1>Example Style UI Component</h1>
      </div>
    </>
  );
};
