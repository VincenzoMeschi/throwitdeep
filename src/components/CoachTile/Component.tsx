import React from "react";
import { CoachTileProps } from "@/components/CoachTile/config";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const CoachTile: React.FC<CoachTileProps> = ({
	image,
	name,
	featuredBio,
	className,
	slug,
}) => {
	return (
		<Link
			scroll={true}
			href={"/coaches/" + slug}
			className={cn(
				"flex flex-col md:flex-row w-full h-fit hover:bg-card rounded-3xl transform transition-colors duration-500",
				className
			)}>
			<div className="w-full h-[24rem] md:basis-1/3 md:h-full md:w-full rounded-3xl md:rounded-r-none relative  overflow-hidden">
				<Image className="object-cover" fill {...image} />
			</div>
			<div className="flex flex-col basis-3/4 justify-start gap-2 md:gap-5 py-7 md:p-7">
				<h3 className="text-3xl md:text-4xl font-bold">{name}</h3>
				<p>{featuredBio}</p>
			</div>
		</Link>
	);
};
