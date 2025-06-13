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
		<div className={cn("flex w-full", className)}>
			<Image className="w-[26.25rem] rounded-l-3xl" {...image} />
			<div className="flex flex-col gap-5 p-7 h-full">
				<h3 className="text-4xl font-bold">{name}</h3>
				<p>{bio}</p>
			</div>
		</div>
	);
};
