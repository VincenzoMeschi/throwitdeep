import React from "react";
import { AthleteSectionProps } from "@/sections/Athletes/config";
import { PlayerSlider } from "@/components/PlayerSlider/Component";

export const AthleteSection: React.FC<AthleteSectionProps> = ({
	mainHeading,
	subHeading,
	carousel,
}) => {
	return (
		<div className="contents">
			<h2
				className="col-span-6 text-5xl font-bold scroll-mt-16"
				id="about">
				{mainHeading}
			</h2>
			<h6 className="col-span-6">{subHeading}</h6>
			<PlayerSlider className="col-span-12 mt-14" items={carousel} />
		</div>
	);
};
