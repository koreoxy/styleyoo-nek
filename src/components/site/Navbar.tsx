import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-full sticky top-0 z-50 border-b bg-white">
      <div className="flex h-16 items-center px-10 sm:px-16 lg:px-44">
        <div className="mx-auto w-full max-w-3xl space-y-20">
          <div className="flex justify-between">
            <div className="flex flex-1 items-center justify-start">
              <Link
                to="/"
                className="inline-flex h-10 items-center justify-center text-lg font-bold text-gray-800 font-salsa"
              >
                Styleyoo/nek
              </Link>
            </div>
            <div className="flex flex-1 items-center justify-end">Sytle</div>
          </div>
        </div>
      </div>
    </div>
  );
};
