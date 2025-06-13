import { ImageProps } from "next/image";

export type StateCardProps = {
	image: ImageProps;
	stateName: string;
	isComingSoon: boolean;
};
