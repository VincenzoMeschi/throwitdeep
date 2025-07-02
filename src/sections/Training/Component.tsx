import React from "react";
import { TrainingProps } from "@/sections/Training/config";
import { SingleFeature } from "@/components/SingleFeature/Component";

export const Training: React.FC<TrainingProps> = ({ mainHeading, content }) => {
	return (
		<div className="contents">
			<h2
				className="col-span-full text-4xl md:text-5xl font-bold text-center mt-26 mb-16 scroll-mt-16"
				id="training">
				{mainHeading}
			</h2>
			<SingleFeature {...content} />
		</div>
	);
};
