import { motion } from "motion/react";
import { CardProps } from "@/components/PlayerCard/config";
import { BlurImage } from "@/components/BlurImage/Component";
export const PlayerCard = ({
	card,
	layout = false,
}: {
	card: CardProps;
	index: number;
	layout?: boolean;
}) => {
	return (
		<motion.div
			layoutId={layout ? `card-${card.title}` : undefined}
			className="relative z-10 flex h-[30rem] w-80 flex-col items-start justify-end overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-[26.25rem] dark:bg-neutral-900">
			<div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-t from-black/80 via-transparent to-transparent" />
			<div className="relative z-40 p-4 md:p-8">
				<motion.h2
					layoutId={layout ? `title-${card.title}` : undefined}
					className="md:max-w-lg text-left text-4xl md:text-4xl font-bold text-white">
					{card.title}
				</motion.h2>

				<motion.p
					layoutId={layout ? `category-${card.category}` : undefined}
					className="text-left text-white mt-2 ">
					{card.category}
				</motion.p>
			</div>
			<BlurImage
				src={card.src}
				alt={card.title}
				fill
				className="absolute scale-101 z-10 object-cover"
			/>
		</motion.div>
	);
};
