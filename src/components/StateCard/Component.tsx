import React from "react";
import { StateCardProps } from "@/components/StateCard/config";
import Image from "next/image";
import { TiltCard } from "@/components/tilt-card/Component";

export const StateCard: React.FC<StateCardProps> = ({
	image,
	stateName,
	isComingSoon,
}) => {
	return (
		<TiltCard className="relative col-span-4 sm:col-span-3 lg:col-span-4 rounded-3xl overflow-hidden h-56">
			{isComingSoon && (
				<div className="absolute z-20 top-5 right-5 bg-accent rounded-full px-2 py-1.5">
					<h6 className="font-bold text-[.5rem]">COMING SOON</h6>
				</div>
			)}
			<div className="absolute flex justify-end p-5 flex-col z-20 w-full h-full">
				<h4 className="font-bold text-3xl md:text-4xl">{stateName}</h4>
			</div>
			<div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-full bg-gradient-to-t from-black/75 via-transparent to-transparent" />
			<Image className="absolute z-0 h-full object-cover" {...image} />
		</TiltCard>
	);
};
