import React from "react";
import { StaffCardProps } from "@/components/StaffCard/config";
import Image from "next/image";

export const StaffCard: React.FC<StaffCardProps> = ({
	image,
	fullName,
	title,
	location,
}) => {
	return (
		<div className="col-span-4 sm:col-span-3 lg:col-span-4 rounded-3xl overflow-hidden h-fit bg-card">
			<Image className="h-full object-cover" {...image} />
			<div className="flex justify-end px-8 pt-6 pb-12 flex-col h-fit">
				<h4 className="font-bold text-3xl md:text-[2rem]">
					{fullName}
				</h4>
				<h6 className="text-white/50">
					{title} {location && " - " + location}
				</h6>
			</div>
		</div>
	);
};
