"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("930b16f2-aa39-49d8-a5bd-c4d1099f4ad6");
  }, []);

  return null;
};
