// src/app/coaches/[coach]/page.tsx
import React from "react";
import { FeaturedCoachesData } from "@/data/coaches/data";
import { CoachTileProps } from "@/components/CoachTile/config";
import { redirect } from "next/navigation";
import { CoachBio } from "@/components/CoachBio/Component";
import { TrainingSectionData } from "@/data/home/data";
import { Training } from "@/sections/Training/Component";
import ScrollUp from "@/components/ScrollUp/Component";

export default async function Coach({
	params,
}: {
	params: Promise<{ coach: string }>;
}) {
	const { coach: slug } = await params;

	const coach = FeaturedCoachesData.coaches.find(
		(c: CoachTileProps) => c.slug === slug
	);

	if (!coach) {
		return redirect("/");
	}

	return (
		<>
			<CoachBio {...coach} />
			<Training {...TrainingSectionData} />
			<ScrollUp />
		</>
	);
}
