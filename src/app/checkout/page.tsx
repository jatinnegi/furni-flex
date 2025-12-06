"use client";
import { useState } from "react";
import AddAddress from "@/components/Checkout/AddAddress";
import CheckoutList from "@/components/Checkout/List";
import CheckoutSummary from "@/components/Checkout/Summary";

import Container from "@/components/Layout/Container";

export default function Checkout() {
  const [addressSaved, setAddressSaved] = useState<boolean>(false);

  return (
    <Container className="flex items-start gap-12 !max-w-[1250px] mb-32">
      {!addressSaved ? (
        <AddAddress
          save={() => {
            setAddressSaved(true);
          }}
        />
      ) : (
        <CheckoutList />
      )}
      <CheckoutSummary />
    </Container>
  );
}
