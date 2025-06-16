import { ImageProps } from "@/lib/types";

export type CoachTileProps = {
	image: ImageProps;
	bioImage: ImageProps;
	name: string;
	featuredBio: string;
	slug: string;
	fullBio: string[];
	extraImages: ImageProps[];
} & React.HTMLAttributes<HTMLDivElement>;
