"use client";
import React, { useState } from "react";
import Bubbles from "../../public/images/Bubbles.png";
import Image from "next/image";

export function Price() {
  const [selectedOption, setSelectedOption] = useState("monthly");
  const toggleOption = (option: string) => {
    setSelectedOption(option);
  };
  return <h1>Pricing Page</h1>;
}
