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
				className="md:col-span-6 col-span-full text-left text-4xl md:text-5xl font-bold scroll-mt-16"
				id="about">
				{mainHeading}
			</h2>
			<h6 className="md:col-span-6 col-span-full mt-8 lg:mt-0 text-left">
				{subHeading}
			</h6>
			<PlayerSlider className="col-span-full mt-14" items={carousel} />
		</div>
	);
};
