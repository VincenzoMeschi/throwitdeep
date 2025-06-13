"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { NavigationProps } from "@/components/Navigation/config";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton/Component";
import { MainGrid } from "@/components/MainGrid/Component";
import { SlideTabsExample } from "@/components/SlideTabs/Component";
import { motion } from "motion/react";

export const Navigation: React.FC<NavigationProps> = ({
	logoSettings,
	navLinks,
	ctaButton,
	className,
}) => {
	const [isScrollingDown, setIsScrollingDown] = useState(false);
	const lastScrollY = useRef(0);
	const pathname = usePathname(); // ← get current route

	const variables = {
		down: { y: -100 },
		up: { y: 0 },
	};

	const transitions = {
		down: { ease: "easeOut", duration: 0.6 },
		up: { ease: "easeIn", duration: 0.1 },
	};

	useEffect(() => {
		const handleScroll = () => {
			const currentY = window.scrollY;
			setIsScrollingDown(currentY > lastScrollY.current && currentY > 50);
			lastScrollY.current = currentY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.nav
			initial={{ y: 0 }}
			animate={isScrollingDown ? variables.down : variables.up}
			transition={isScrollingDown ? transitions.down : transitions.up}
			className={cn(
				className,
				"fixed z-99 mx-auto w-full py-5 drop-shadow-[0_5px_5px_#00000025]"
			)}>
			<MainGrid className="py-0">
				<Link
					href="/"
					className="px-0 py-0 col-span-2 flex items-center">
					<Image {...logoSettings} />
				</Link>

				{pathname === "/" && ( // ← only on homepage
					<div className="col-start-4 col-span-6">
						<SlideTabsExample links={navLinks} />
					</div>
				)}

				<div className="col-span-2 col-start-11 flex w-full items-center justify-end">
					<CTAButton {...ctaButton} />
				</div>
			</MainGrid>
		</motion.nav>
	);
};
