"use client";
import { delay } from "motion/react";
import * as motion from "motion/react-client";
import * as React from "react";

export function TextFade({
	direction,
	children,
	className = "",
	staggerChildren = 0.1,
	delay = 0,
}: {
	direction: "up" | "down";
	children: React.ReactNode;
	className?: string;
	staggerChildren?: number;
	delay?: number;
}) {
	const FADE_DOWN = {
		show: {
			opacity: 1,
			y: 0,
			transition: { type: "spring", delay: delay },
		},
		hidden: { opacity: 0, y: direction === "down" ? -18 : 18 },
	};
	return (
		<motion.div
			initial="hidden"
			animate="show"
			variants={{
				hidden: {},
				show: {
					transition: {
						staggerChildren: staggerChildren,
					},
				},
			}}
			className={className}>
			{React.Children.map(children, (child) =>
				React.isValidElement(child) ? (
					<motion.div variants={FADE_DOWN}>{child}</motion.div>
				) : (
					child
				)
			)}
		</motion.div>
	);
}
