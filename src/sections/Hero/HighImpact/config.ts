import { CTAButtonProps, ImageProps } from "@/lib/types";

export type HighImpactHeroProps = {
	backgroundImage: ImageProps;
	leftSide: {
		signature?: ImageProps;
	};
	rightSide: {
		mainHeading: string;
		subHeading: string;
		buttons: {
			mainButton: Omit<CTAButtonProps, "type"> & { type: "primary" };
			secondaryButton: Omit<CTAButtonProps, "type"> & {
				type: "text-only";
			};
		};
	};
};
