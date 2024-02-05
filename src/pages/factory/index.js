import React from "react";

const Factory = () => {
  const [name, setName] = React.useState("");
  const [symbol, setSymbol] = React.useState("");
  const [count, setCount] = React.useState("");
  const [decimals, setDecimals] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [file, setFile] = React.useState();

  const handleFile = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  const handleName = (e) => setName(e.target.value);
  const handleSymbol = (e) => setSymbol(e.target.value);
  const handleCount = (e) => setCount(e.target.value);
  const handleDecimals = (e) => setDecimals(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    // others are all go here.
  };
  return (
    <div className="flex flex-col items-center pb-24">
      <span className="text-[70px] text-white py-24 font-delicious-handrawn">
        Pixie Token Factory
      </span>
      <form
        className="bg-[#141414] rounded-lg p-6 max-w-[512px] w-full"
        onSubmit={onSubmit}
      >
        <div className="flex justify-between items-center">
          <p className="text-[#A8A8A8] text-base font-medium">
            Create Sei Token
          </p>
          <a className="bg-[#FE6A77] py-1 px-3 rounded-md cursor-pointer">
            <span className="text-white text-sm font-bold hover:opacity-70">
              View Tutorial
            </span>
          </a>
        </div>
        <div className="pt-6 pb-8">
          <div className="border-b border-white border-dashed"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col">
            <label
              for="token_name"
              className="text-white text-base font-semibold pl-5"
            >
              Token Name
            </label>
            <input
              value={name}
              onChange={handleName}
              id="token_name"
              className="bg-[#0F0F0F] text-sm px-5 py-4 rounded-lg text-white focus-visible:outline-none"
              placeholder="Insert token name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              for="token_symbol"
              className="text-white text-base font-semibold pl-5"
            >
              Token Symbol
            </label>
            <input
              value={symbol}
              onChange={handleSymbol}
              id="token_symbol"
              className="bg-[#0F0F0F] text-sm px-5 py-4 rounded-lg text-white focus-visible:outline-none"
              placeholder="Choose Token Symbol (ex. SEI)"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              for="token_count"
              className="text-white text-base font-semibold pl-5"
            >
              Number of Tokens
            </label>
            <input
              id="token_count"
              value={count}
              onChange={handleCount}
              className="bg-[#0F0F0F] text-sm px-5 py-4 rounded-lg text-white focus-visible:outline-none"
              placeholder="0"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              for="token_decimals"
              className="text-white text-base font-semibold pl-5"
            >
              Number of Decimals
            </label>
            <input
              id="token_decimals"
              value={decimals}
              onChange={handleDecimals}
              className="bg-[#0F0F0F] text-sm px-5 py-4 rounded-lg text-white focus-visible:outline-none"
              placeholder="0"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              for="token_description"
              className="text-white text-base font-semibold pl-5"
            >
              Token Description
            </label>
            <input
              id="token_description"
              value={description}
              onChange={handleDescription}
              className="bg-[#0F0F0F] text-sm px-5 py-4 rounded-lg text-white focus-visible:outline-none"
              placeholder="0"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-12">
          <label
            className="bg-[#0F0F0F] rounded-lg py-6 flex flex-row justify-center cursor-pointer"
            for="logo"
          >
            <span className="text-sm text-[#A8A8A8] font-semibold">
              {file ? file?.name : "Upload A Token Icon (Logo)"}
            </span>
          </label>
          <input
            type="file"
            hidden
            id="logo"
            onChange={handleFile}
            accept="image/*"
          />
          <button
            className="flex justify-center bg-[#FE6A77] rounded-md hover:opacity-70"
            type="submit"
          >
            <span className="text-white text-sm font-bold py-2">
              Create My Token
            </span>
          </button>
        </div>
        <p className="text-sm text-[#A8A8A8] text-center pt-8">
          This interface makes creating your own SEI token easy! Make sure to
          follow the tutorial attached if this is your first time so that you
          understand all possible settings!
        </p>
      </form>
    </div>
  );
};

export default Factory;
