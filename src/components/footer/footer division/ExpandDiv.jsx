import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function ExpandDiv({ list }) {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div className="flex text-[1rem] font-bold flex-col ">
      <div
        className="flex justify-between py-[1rem]"
        onClick={() => {
          setIsExpand((prev) => !prev);
        }}
      >
        {list.title} <IoIosArrowDown className="text-[1.3rem]" />
      </div>
      <div
        style={{ height: isExpand ? "" : "0" }}
        className="flex flex-col gap-[10px] text-[#707072] overflow-hidden transition-all duration-300 ease-linear"
      >
        {list.list.map((item, index) => {
          return <p>{item}</p>;
        })}
      </div>
    </div>
  );
}

export default ExpandDiv;
