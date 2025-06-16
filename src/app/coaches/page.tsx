import ScrollUp from "@/components/ScrollUp/Component";
import { FeaturedCoachesData, StaffSectionData } from "@/data/coaches/data";
import { FeaturedCoaches } from "@/sections/FeaturedCoaches/Component";
import { StaffSection } from "@/sections/Staff/Component";
import React from "react";

export default function Coaches() {
	return (
		<>
			<FeaturedCoaches {...FeaturedCoachesData} />
			<StaffSection {...StaffSectionData} />
			<ScrollUp />
		</>
	);
}
