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
import { motion, AnimatePresence } from "motion/react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const Navigation: React.FC<NavigationProps> = ({
	logoSettings,
	navLinks,
	ctaButton,
	className,
}) => {
	const [isScrollingDown, setIsScrollingDown] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const lastScrollY = useRef(0);
	const pathname = usePathname();

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

	const toggleMobileMenu = () => setMobileMenuOpen((open) => !open);

	return (
		<nav
			className={cn(
				className,
				"fixed z-50 w-full py-5 drop-shadow-[0_5px_5px_#00000025]"
			)}>
			<MainGrid className="py-0">
				{/* logo */}
				<motion.div
					initial={{ y: 0 }}
					animate={isScrollingDown ? variables.down : variables.up}
					transition={
						isScrollingDown ? transitions.down : transitions.up
					}
					className="col-span-2 flex items-center px-0 py-0">
					<Link href="/">
						<Image {...logoSettings} alt="logo" />
					</Link>
				</motion.div>

				{/* mobile menu button */}
				<div className="col-span-2 sm:col-start-5 flex drop-shadow-2xl justify-end md:hidden">
					<button onClick={toggleMobileMenu} aria-label="Toggle menu">
						{mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
					</button>
				</div>

				{/* desktop tabs on homepage */}
				{pathname === "/" && (
					<div className="hidden md:flex justify-end lg:justify-center lg:col-start-4 lg:col-span-6 sm:col-span-4">
						<SlideTabsExample links={navLinks} />
					</div>
				)}

				{/* desktop CTA */}
				<motion.div
					className="hidden lg:flex col-span-2 col-start-11 items-center justify-end"
					initial={{ y: 0 }}
					animate={isScrollingDown ? variables.down : variables.up}
					transition={
						isScrollingDown ? transitions.down : transitions.up
					}>
					<CTAButton {...ctaButton} />
				</motion.div>
			</MainGrid>

			{/* mobile slide-out panel */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "tween", duration: 0.3 }}
						className="fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-primary shadow-lg z-90">
						<div className="flex justify-end p-4">
							<button
								onClick={toggleMobileMenu}
								aria-label="Close menu">
								<CloseIcon />
							</button>
						</div>
						<div className="flex flex-col items-start p-4">
							{navLinks.map((link) => (
								<Link
									key={link.url}
									href={link.url}
									className="text-lg font-medium w-full py-4 border-t-2 border-border last:border-b-2"
									onClick={toggleMobileMenu}>
									{link.label}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};
