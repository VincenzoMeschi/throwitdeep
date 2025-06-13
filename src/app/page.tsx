import { CoachTile } from "@/components/CoachTile/Component";
import {
	HighImpactHeroData,
	AthleteSectionData,
	FeaturedCoachesData,
	TrainingSectionData,
	LocationSectionData,
} from "@/data/home/data";
import { AthleteSection } from "@/sections/Athletes/Component";
import { FeaturedCoaches } from "@/sections/FeaturedCoaches/Component";
import { HighImpactHero } from "@/sections/Hero/HighImpact/Component";
import { Locations } from "@/sections/Locations/Component";
import { Training } from "@/sections/Training/Component";

export default function Home() {
	return (
		<>
			<HighImpactHero {...HighImpactHeroData} />
			<AthleteSection {...AthleteSectionData} />
			<FeaturedCoaches {...FeaturedCoachesData} />
			<Training {...TrainingSectionData} />
			<Locations {...LocationSectionData} />
		</>
	);
}
