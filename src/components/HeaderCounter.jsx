

import React from "react";

export default function HeaderCounter({ inProgress, resolved }) {
  return (
    <div className="grid grid-cols-2 gap-[10px] my-[50px] w-6xl container mx-auto">
      <div className="rounded-md p-7 text-white h-[250px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col items-center justify-center">
        <h2 className="text-lg font-semibold">In-Progress</h2>
        <p className="text-4xl font-bold mt-2">{inProgress}</p>
      </div>
      <div className="rounded-md p-7 text-white h-[250px] bg-gradient-to-r from-[#54CF68] to-[#00827A] flex flex-col items-center justify-center">
        <h2 className="text-lg font-semibold">Resolved</h2>
        <p className="text-4xl font-bold mt-2">{resolved}</p>
      </div>
    </div>
  );
}
