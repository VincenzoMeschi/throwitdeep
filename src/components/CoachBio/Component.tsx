import React from "react";
import { CoachTileProps } from "../CoachTile/config";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const CoachBio: React.FC<CoachTileProps> = ({
	name,
	bioImage,
	fullBio,
	extraImages,
	slug,
}) => {
	return (
		<div className="contents">
			<div
				id={slug}
				className="relative col-span-full h-96 w-auto rounded-3xl overflow-hidden mt-26 scroll-mt-0">
				<Image className="object-cover object-top" fill {...bioImage} />
			</div>
			<h1 className="col-span-full md:text-5xl text-4xl font-bold mt-24 mb-8">
				{name}
			</h1>
			<div
				className={cn(
					"col-span-full",
					extraImages && "lg:col-span-8 md:col-span-4"
				)}>
				{fullBio.map((p, i) => {
					return (
						<p className="mb-2" key={i}>
							{p}
						</p>
					);
				})}
			</div>
			{extraImages && (
				<div className="lg:col-span-4 md:col-span-2 col-span-full flex flex-col gap-5 h-full">
					{extraImages.map((image, i) => {
						return (
							<div
								key={i}
								className="relative rounded-3xl w-full h-full overflow-hidden">
								<Image
									fill
									className="object-cover"
									{...image}
								/>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};
