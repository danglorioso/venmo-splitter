import React, { useState, useMemo } from "react";


const utilities = ["Electricity", "Gas", "Internet"];
const months = [ "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const roommates = JSON.parse(import.meta.env.VITE_ROOMMATES || "[]");
const myVenmo = import.meta.env.VITE_MY_VENMO || "";

export default function UtilitySplitForm() {
  const today = new Date();
  const currentMonthIndex = today.getMonth();

  const [utility, setUtility] = useState(utilities[0]);
  const [month, setMonth] = useState(months[currentMonthIndex]);
  const [amount, setAmount] = useState("");

  // Number of people (including me)
  const totalPeople = roommates.length + 1;

  // Calculate per-person amount
  const perPersonAmount = useMemo(() => {
    if (!amount || isNaN(Number(amount))) return 0;
    const amt = parseFloat(amount);
    return Math.ceil((amt / totalPeople) * 100) / 100;
  }, [amount, totalPeople]);

  // Construct the title
  const title = `${utility} - ${month}`;

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded space-y-6">
      <h2 className="text-xl font-semibold">Utility Split Request</h2>

      {/* Utility select */}
      <label className="block font-medium mb-1" htmlFor="utility">
        Request For
      </label>
      <select
        id="utility"
        value={utility}
        onChange={(e) => setUtility(e.target.value)}
        className="w-full border rounded px-3 py-2"
      >
        {utilities.map((u) => (
          <option key={u} value={u}>{u}</option>
        ))}
      </select>

      {/* Month select */}
      <label className="block font-medium mb-1" htmlFor="month">
        Month
      </label>
      <select
        id="month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        className="w-full border rounded px-3 py-2"
      >
        {months.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>

      {/* Amount input */}
      <label className="block font-medium mb-1" htmlFor="amount">
        Bill Amount ($)
      </label>
      <input
        id="amount"
        type="number"
        min="0"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter total bill amount"
        className="w-full border rounded px-3 py-2"
      />

      {/* Preview */}
      <div className="bg-gray-50 p-4 rounded border">
        <h3 className="font-semibold mb-2">Preview Request:</h3>
        <p>
          <strong>Title:</strong> {title}
        </p>
        <p>
          <strong>Amount per person:</strong> ${perPersonAmount.toFixed(2)}
        </p>
        <p>
          <strong>Will be sent to:</strong>{" "}
          {[...roommates, { name: "You", venmoId: myVenmo }]
            .map((r) => `${r.name} (@${r.venmoId})`)
            .join(", ")}
        </p>
      </div>

      {/* TODO: Add submission logic */}
    </div>
  );
}
