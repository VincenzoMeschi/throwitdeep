import { CTAButtonProps, ImageProps } from "@/lib/types";

export type SingleFeatureProps = {
	image: ImageProps;
	mainHeading: string;
	body: string[];
	primaryButton: Omit<CTAButtonProps, "type"> & { type: "primary" };
	secondaryButton: Omit<CTAButtonProps, "type"> & { type: "text-only" };
};
