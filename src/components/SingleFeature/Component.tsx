import React from "react";
import { SingleFeatureProps } from "@/components/SingleFeature/config";
import { CTAButton } from "../CTAButton/Component";
import Image from "next/image";

export const SingleFeature: React.FC<SingleFeatureProps> = ({
	image,
	mainHeading,
	body,
	primaryButton,
	secondaryButton,
}) => {
	return (
		<div className="col-span-full flex flex-col md:flex-row">
			<Image
				className="rounded-3xl md:rounded-r-none sm:aspect-video md:aspect-auto md:w-3/8 sm:w-full lg:w-[33.125rem] object-cover"
				{...image}
			/>
			<div className="flex flex-col h-full gap-8 pt-15 md:px-15">
				<h3 className="text-3xl md:text-4xl font-bold">
					{mainHeading}
				</h3>
				{body.map((p, i) => {
					return <p key={i}>{p}</p>;
				})}
				<div className="flex gap-5">
					<CTAButton {...primaryButton} />
					<CTAButton {...secondaryButton} />
				</div>
			</div>
		</div>
	);
};
