import { CardProps } from "@/components/PlayerCard/config";

export type CarouselProps = {
	items: CardProps[];
	initialScroll?: number;
} & React.HTMLAttributes<HTMLDivElement>;
