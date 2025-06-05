"use client";
import { useState } from "react";
import { calculateBillingRate } from "./utils/calculation";
import { CalculatorForm } from "./components/form";
import { Result } from "./components/result";
import { InputType } from "./types/inputType";
import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function CalculatorPage() {
  useDocumentTitle("Kalkulator Billing Rate");
  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = (form: InputType) => {
    const rate = calculateBillingRate(form);
    setResult(rate);
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        Kalkulator Billing Rate INKINDO 2025
      </h1>
      <CalculatorForm onSubmit={handleSubmit} />
      {result && <Result nilai={result} />}
    </div>
  );
}
