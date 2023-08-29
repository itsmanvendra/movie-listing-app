import React from "react";
import Image from "next/image";
const NoData = () => {
  return (
		<div className="md:col-span-3 lg:col-span-4 justify-self-center items-center opacity-60">
			<Image src="/nodata.jpg" alt="No Data" width={600} height={600} />
		</div>
  );
};

export default NoData;
