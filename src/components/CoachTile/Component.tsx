import React from "react";
import { CoachTileProps } from "@/components/CoachTile/config";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const CoachTile: React.FC<CoachTileProps> = ({
	image,
	name,
	bio,
	className,
}) => {
	return (
		<div className={cn("flex flex-col md:flex-row w-full", className)}>
			<Image
				className="w-full md:w-3/8 lg:w-[26.25rem] rounded-3xl md:rounded-r-none object-cover"
				{...image}
			/>
			<div className="flex flex-col justify-start gap-2 md:gap-5 py-7 md:p-7 h-full">
				<h3 className="text-3xl md:text-4xl font-bold">{name}</h3>
				<p>{bio}</p>
			</div>
		</div>
	);
};
