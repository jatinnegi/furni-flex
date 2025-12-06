"use client";
import { useState } from "react";
import Tabs, { TabTypes } from "./Tabs";

interface FAQProps {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQProps[] = [
  {
    id: 1,
    question: "How comfortable is it?",
    answer:
      "Meticulously crafted with comfort in mind, each sofa cushion is made with multiple layers of high-resiliency trillium foam that mimics the plush feel of down and is designed to keep its shape over time. The Helm Sofa has a standard seat depth made extra comfortable with pillow-style back cushions",
  },
  {
    id: 2,
    question: "How will it be packaged?",
    answer:
      "Your sofa will arrive fully assembled and in one box, 100'' W x 38'' D x 32'' H, 177 lbs.",
  },
  {
    id: 3,
    question: "Are the cushions removable?",
    answer:
      "The three back cushions are removable and feature a zipper if cover needs to be spot cleaned separately. Base and side cushions are attached and not removable.",
  },
];

interface InformationProps {
  id: number;
  type: string;
  value: string;
}

const productInformation: InformationProps[] = [
  { id: 1, type: "Brand", value: "The Citizenry" },
  { id: 2, type: "Country of Origin", value: "Japan" },
  { id: 3, type: "Colour", value: "White" },
  { id: 4, type: "Material", value: "Leather" },
  { id: 5, type: "Fabric", value: "Chalk" },
  { id: 6, type: "Weight", value: "4.8 Kgs" },
  { id: 7, type: "Dimensions", value: "33.75”D x 88.5”W x 30.6”H" },
  { id: 8, type: "Manufacturer", value: "Acme Upholstery" },
  { id: 9, type: "SKU", value: "86979-1" },
];

const Detail = () => {
  const [activeTab, setActiveTab] = useState<TabTypes>(0);

  return (
    <div className="w-full">
      <Tabs
        activeTab={activeTab}
        updateActiveTab={(tabType: TabTypes) => {
          setActiveTab(tabType);
        }}
      />
      <div className="w-2/3 py-6">
        {activeTab === 0 ? (
          <div className="w-full flex flex-col gap-4 text-black/75">
            <p>
              Masterfully crafted for unrivaled comfort, with multiple layers of
              high-resiliency trillium foam for an extra plush feel, this sofa
              invites you to sink in and cozy up. Framed with a solid walnut
              base and exquisite joint detailing, its a true heirloom piece
              designed to stand the test of time. Available in custom upholstery
              options, with your choice of Crypton performance fabric or luxe
              cotton velvet, create the sofa of your dreams.
            </p>
            <p>
              Completely made to order, each piece takes 13-15 weeks to arrive
              at your home. Built by a team of experienced sewers, cutters, and
              upholsterers in Northern California, every chair is truly a modern
              heirloom. Made with locally-sourced walnut and upholstered with
              durable fabrics, every piece is made start to finish in a fair
              trade environment.
            </p>
            <div className="mt-4">
              <p className="text-2xl">FAQs</p>
              <ul className="mt-4 list-disc flex flex-col gap-5">
                {faqs.map((faq: FAQProps) => (
                  <li key={faq.id}>
                    <p className="font-semibold uppercase text-black/75">
                      {faq.question}
                    </p>
                    <p className="font-light mt-1">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : activeTab === 1 ? (
          <div className="w-full">
            <ul className="w-full max-w-lg text-sm mb-10">
              {productInformation.map((info: InformationProps) => (
                <li
                  key={info.id}
                  className="flex justify-between px-4 py-3"
                  style={{
                    backgroundColor: info.id % 2 === 0 ? "#FFFFFF" : "#FBFAF9",
                  }}
                >
                  <p className="uppercase text-black/75">{info.type}</p>
                  <p className="font-light">{info.value}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="w-full">
            <p className="text-2xl mb-6">Shipping & Returns</p>
            <div className="flex flex-col gap-4 max-w-xl">
              <div className="flex gap-4">
                <p className="w-36">Shipping</p>
                <div className="font-light flex-1">
                  <p>Always free shipping within the continental U.S.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <p className="w-36">Returns</p>
                <div className="font-light flex-1 flex flex-col gap-2">
                  <p>Exchanges and returns for store credit are free.</p>
                  <p>
                    Prefer a refund? A single re-stocking fee will apply to
                    returns within 30 days:
                  </p>
                  <ul className="flex flex-col gap-1 my-2">
                    <li>$0 (no fee) for just bedding and/or towels</li>
                    <li>$10 for most other returned orders</li>{" "}
                    <li>
                      $50 if your return includes oversized items (area rugs,
                      furniture, mirrors)
                    </li>
                  </ul>
                  <p>
                    White glove delivery items are handled separately and have a
                    15% re-stocking fee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
