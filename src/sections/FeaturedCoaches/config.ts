import { CoachTileProps } from "@/components/CoachTile/config";
import { CTAButtonProps } from "@/lib/types";

export type FeaturedCoachesProps = {
	mainHeading: string;
	coaches: CoachTileProps[];
	ctaButton: CTAButtonProps;
};
