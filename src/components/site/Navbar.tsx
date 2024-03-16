import { HiMiniMoon } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-50 border-b bg-white">
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
            <div className="flex flex-1 items-center justify-end gap-4">
              <div className="flex items-center gap-5">
                <Link to="/about">About</Link>
                <Link to="/">Docs</Link>
                <Link to="/">Components</Link>
              </div>
              <div className="flex gap-5 border-l-[1px] border-gray-400 px-3">
                <HiMiniMoon className="w-5 h-5" />
                <a href="">
                  <SiGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
