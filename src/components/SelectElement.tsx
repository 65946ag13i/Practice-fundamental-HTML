import { useState } from "react";

export default function SelectElement() {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <section className="flex-xcenter  flex-col ">
        <h1 className="text-left w-full">select element</h1>
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          <option value="">請選擇</option>
          <option value="蘋果">蘋果</option>
          <option value="香蕉">香蕉</option>
        </select>
        <h3>選擇數值:{selected}</h3>
      </section>
    </div>
  );
}
