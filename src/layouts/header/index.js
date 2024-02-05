import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row justify-between border-b border-[#363636]">
      <div className="flex flex-row gap-5 items-center">
        <img alt="logo" />
        <div className="flex flex-row gap-5 items-center py-3">
          <Link to={`/factory`}>
            <span className="text-xl text-white font-delicious-handrawn">Token Factory</span>
          </Link>
          <Link to={`/staking`}>
            <span className="text-xl text-white font-delicious-handrawn">Staking</span>
          </Link>
          <Link to={`/room`}>
            <span className="text-xl text-white font-delicious-handrawn">Games Room</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
