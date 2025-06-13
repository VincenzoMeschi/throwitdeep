import { ImageProps } from "@/lib/types";

export type CoachTileProps = {
	image: ImageProps;
	name: string;
	bio: string;
} & React.HTMLAttributes<HTMLDivElement>;
