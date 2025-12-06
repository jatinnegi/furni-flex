import { FC } from "react";
import Checkbox from "@/components/Inputs/Checkbox";

interface Props {
  save: () => void;
}

const AddAddressForm: FC<Props> = ({ save }) => {
  return (
    <div className="flex-1">
      <form className="w-full my-4 flex flex-col gap-3 text-sm">
        <p className="text-2xl">Contact</p>
        <input
          type="text"
          className="w-full h-12 border-[1px] border-solid border-gray-300/75 px-4 outline-none rounded-md"
          placeholder="Email"
        />
        <Checkbox label="Email me with news and offers" />
        <p className="text-2xl mt-6">Shipping Address</p>
        <div className="flex gap-3 h-12">
          <input
            type="text"
            className="w-full h-full border-[1px] border-solid border-gray-300/75 px-4 outline-none rounded-md"
            placeholder="First Name"
          />
          <input
            type="text"
            className="w-full h-full border-[1px] border-solid border-gray-300/75 px-4 outline-none rounded-md"
            placeholder="Last Name"
          />
        </div>
        <div className="flex h-12">
          <input
            type="text"
            className="w-full h-full border-[1px] border-solid border-gray-300/75 px-4 outline-none rounded-md"
            placeholder="Company (Optional)"
          />
        </div>
        <div className="flex h-12">
          <input
            type="text"
            className="w-full h-full border-[1px] border-solid border-gray-300/75 px-4 outline-none rounded-md"
            placeholder="Country/Region"
          />
        </div>
        <div className="flex gap-3 h-12">
          <input
            type="text"
            className="w-full h-full border-[1px] border-solid border-gray-300/75 px-4 outline-none rounded-md"
            placeholder="Address Line 1"
          />
          <input
            type="text"
            className="w-full h-full border-[1px] border-solid border-gray-300/75 px-4 outline-none rounded-md"
            placeholder="Address Line 2"
          />
        </div>
        <div className="flex gap-3 h-12">
          <input
            type="text"
            className="w-full h-full border-[1px] border-solid border-gray-300/75 px-4 outline-none rounded-md"
            placeholder="City"
          />
          <input
            type="text"
            className="w-full h-full border-[1px] border-solid border-gray-300/75 px-4 outline-none rounded-md"
            placeholder="State"
          />
          <input
            type="text"
            className="w-full h-full border-[1px] border-solid border-gray-300/75 px-4 outline-none rounded-md"
            placeholder="Zip Code"
          />
        </div>
        <button
          type="button"
          className="h-14 w-full bg-[var(--color-primary-darker)] text-[var(--color-on-text)] cursor-pointer mt-2 rounded-md text-base"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            save();
          }}
        >
          Save My Address
        </button>
      </form>
    </div>
  );
};

export default AddAddressForm;
