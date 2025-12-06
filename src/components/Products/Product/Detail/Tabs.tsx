import { FC } from "react";
import { clsx } from "clsx";

export type TabTypes = 0 | 1 | 2;

interface TabProps {
  label: string;
  type: TabTypes;
}

const tabs: TabProps[] = [
  {
    label: "Description",
    type: 0,
  },
  {
    label: "Additional Information",
    type: 1,
  },
  {
    label: "Shipping & Returns",
    type: 2,
  },
];

interface Props {
  activeTab: TabTypes;
  updateActiveTab: (tabType: TabTypes) => void;
}

const Tabs: FC<Props> = ({ activeTab, updateActiveTab }) => {
  return (
    <ul className="flex gap-4 list-none border-b-[1px] border-b-solid border-b-gray-200">
      {tabs.map((tab: TabProps) => (
        <li key={tab.type}>
          <button
            type="button"
            className={clsx(
              activeTab === tab.type
                ? "border-t-[#7F534B] text-black bg-white"
                : "text-black/50 bg-gray-100",
              "relative py-3 px-8 font-light border-1 border-b-0 border-solid border-gray-200 rounded-t-md cursor-pointer transition-all ease-linear duration-200"
            )}
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.preventDefault();
              updateActiveTab(tab.type);
            }}
          >
            <span>{tab.label}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
