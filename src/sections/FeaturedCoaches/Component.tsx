import React from "react";
import { FeaturedCoachesProps } from "@/sections/FeaturedCoaches/config";
import { CoachTile } from "@/components/CoachTile/Component";
import { CTAButton } from "@/components/CTAButton/Component";

export const FeaturedCoaches: React.FC<FeaturedCoachesProps> = ({
	mainHeading,
	coaches,
	ctaButton,
}) => {
	return (
		<div className="contents">
			<h1
				className="col-span-full text-4xl md:text-5xl font-bold md:text-center mt-26"
				id="coaches">
				{mainHeading}
			</h1>
			<div className="col-span-full flex flex-col gap-y-5 mt-8 md:mt-20">
				{coaches.map((coach, index) => {
					return <CoachTile key={index} {...coach} />;
				})}
			</div>
			<div className="col-span-full flex md:justify-center mt-10">
				<CTAButton {...ctaButton} />
			</div>
		</div>
	);
};
