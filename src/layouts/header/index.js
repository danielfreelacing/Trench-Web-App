import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row justify-between border-b border-[#363636] pr-5 pl-3">
      <div className="flex flex-row gap-5 items-center">
        <div className="py-[10px]">
          <img src="" alt="logo" width={58} height={56} />
        </div>
        <div className="flex flex-row gap-5 items-center py-3">
          <Link to={`/factory`}>
            <span className="text-xl text-white font-delicious-handrawn">
              Token Factory
            </span>
          </Link>
          <Link to={`/staking`}>
            <span className="text-xl text-white font-delicious-handrawn">
              Staking
            </span>
          </Link>
          <Link to={`/room`}>
            <span className="text-xl text-white font-delicious-handrawn">
              Games Room
            </span>
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center gap-5">
        <a
          href="https://twitter.com/PixiesOnSei"
          target="_blank"
          className="rounded-full bg-white"
        >
          <img src="" alt="twitter" width={40} height={40} />
        </a>
        <a
          href="https://discord.gg/pixiesonsei"
          target="_blank"
          className="rounded-full bg-white"
        >
          <img src="" alt="discord" width={40} height={40} />
        </a>
      </div>
    </div>
  );
};

export default Header;
