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
		<div className="col-span-12 flex">
			<Image className="rounded-l-3xl w-[33.125rem]" {...image} />
			<div className="flex flex-col h-full gap-8 p-15">
				<h3 className="text-4xl font-bold">{mainHeading}</h3>
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
