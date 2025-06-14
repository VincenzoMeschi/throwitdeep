"use client";
import React, { useEffect } from "react";
import { EastRounded, WestRounded } from "@mui/icons-material";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { CarouselProps } from "@/components/PlayerSlider/config";
import { PlayerCard } from "@/components/PlayerCard/Component";

export const PlayerSlider = ({
	items,
	initialScroll = 0,
	className,
}: CarouselProps) => {
	const carouselRef = React.useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = React.useState(false);
	const [canScrollRight, setCanScrollRight] = React.useState(true);

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.scrollLeft = initialScroll;
			checkScrollability();
		}
	}, [initialScroll]);

	const checkScrollability = () => {
		if (carouselRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } =
				carouselRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
		}
	};

	const scrollLeft = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: -340, behavior: "smooth" });
		}
	};

	const scrollRight = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: 340, behavior: "smooth" });
		}
	};

	return (
		<div className={cn("relative w-full", className)}>
			<div
				className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none]"
				ref={carouselRef}
				onScroll={checkScrollability}>
				<div
					className={cn(
						"absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
					)}></div>

				<div
					className={cn(
						"flex flex-row justify-start gap-4 pl-4",
						"mx-auto w-full"
					)}>
					{items.map((item, index) => (
						<motion.div
							initial={{
								opacity: 0,
								y: 20,
							}}
							animate={{
								opacity: 1,
								y: 0,
								transition: {
									duration: 0.5,
									delay: 0.2 * index,
									ease: "easeOut",
									once: true,
								},
							}}
							key={"card" + index}
							className="rounded-3xl last:pr-[5%] md:last:pr-[33%]">
							<PlayerCard card={item} index={index} />
						</motion.div>
					))}
				</div>
			</div>
			<button
				className="absolute z-40 flex h-15 w-15 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50 top-1/2 drop-shadow-2xl hover:cursor-pointer"
				onClick={scrollLeft}
				disabled={!canScrollLeft}>
				<WestRounded className="h-10 w-10 text-gray-500" />
			</button>
			<button
				className="absolute z-40 flex h-15 w-15 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50 right-0 top-1/2 drop-shadow-2xl hover:cursor-pointer"
				onClick={scrollRight}
				disabled={!canScrollRight}>
				<EastRounded className="h-10 w-10 text-gray-500" />
			</button>
		</div>
	);
};
