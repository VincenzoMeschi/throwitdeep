import React from "react";
import { StaffSectionProps } from "@/sections/Staff/config";
import { StaffCard } from "@/components/StaffCard/Component";

export const StaffSection: React.FC<StaffSectionProps> = ({
	mainHeading,
	staff,
}) => {
	return (
		<div className="contents">
			<h2
				className="col-span-full text-4xl md:text-center md:text-5xl font-bold mt-26"
				id="staff">
				{mainHeading}
			</h2>
			<div className="col-span-full grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-5 gap-y-5 mt-8 md:mt-20">
				{staff.map((staffMember, i) => {
					return <StaffCard key={i} {...staffMember} />;
				})}
			</div>
		</div>
	);
};
