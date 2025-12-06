"use client";
import { FC, useState } from "react";

interface Props {
  minLimit: number;
  maxLimit: number;
}

const PriceSlider: FC<Props> = ({ minLimit = 0, maxLimit = 1000 }) => {
  const allowedCharacters = "1234567890";

  const [minPrice, setMinPrice] = useState<number>(minLimit);
  const [maxPrice, setMaxPrice] = useState<number>(maxLimit);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleanedValue = e.target.value
      .split("")
      .filter((ch: string) => allowedCharacters.includes(ch))
      .join("");

    // const value = Math.min(Number(cleanedValue), maxPrice - 1);
    const value = Number(cleanedValue);
    setMinPrice(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleanedValue = e.target.value
      .split("")
      .filter((ch: string) => allowedCharacters.includes(ch))
      .join("");
    // const value = Math.max(Number(cleanedValue), minPrice + 1);
    const value = Number(cleanedValue);
    setMaxPrice(value);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "min") {
      setMinPrice(Math.min(Number(value), maxPrice - 1));
    } else {
      setMaxPrice(Math.max(Number(value), minPrice + 1));
    }
  };

  return (
    <>
      <div className="relative h-2">
        <input
          type="range"
          name="min"
          min={minLimit}
          max={maxLimit}
          value={minPrice}
          onChange={handleSliderChange}
          className="absolute w-full z-[4] pointer-events-none appearance-none h-2 bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:bg-[var(--color-primary)] [&::-webkit-slider-thumb]:rounded-full"
        />
        <input
          type="range"
          name="max"
          min={minLimit}
          max={maxLimit}
          value={maxPrice}
          onChange={handleSliderChange}
          className="absolute w-full z-[3] pointer-events-none appearance-none h-2 bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:bg-[var(--color-primary)] [&::-webkit-slider-thumb]:rounded-full"
        />

        {/* Slider Track */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-[var(--color-primary)]/10 rounded z-[1]" />
        <div
          className="absolute top-1/2 transform -translate-y-1/2 h-1 bg-[var(--color-primary)] rounded z-[2]"
          style={{
            left: `${(minPrice / maxLimit) * 100}%`,
            width: `${((maxPrice - minPrice) / maxLimit) * 100}%`,
          }}
        />
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4">
        <label htmlFor="price-slider-min-val" className="flex flex-col gap-2">
          <input
            id="price-slider-min-val"
            type="text"
            className="border-[1px] border-gray-300 font-light rounded px-3 py-1"
            value={`$${minPrice.toLocaleString("en-US")}`}
            onChange={handleMinChange}
          />
          <span className="text-sm font-light">Min. Price</span>
        </label>
        <label htmlFor="price-slider-max-val" className="flex flex-col gap-2">
          <input
            id="price-slider-max-val"
            type="text"
            className="border-[1px] border-gray-300 font-light rounded px-3 py-1"
            value={`$${maxPrice.toLocaleString("en-US")}`}
            onChange={handleMaxChange}
          />
          <span className="text-sm font-light">Max. Price</span>
        </label>
      </div>
    </>
  );
};

export default PriceSlider;
