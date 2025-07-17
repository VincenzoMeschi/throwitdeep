import * as motion from "motion/react-client";
import * as React from "react";

export function GradualSpacing({
	text = "Gradual Spacing",
	delay = 0,
	duration = 0.3,
	className,
}: {
	text: string;
	delay: number;
	duration: number;
} & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className="flex flex-nowrap w-full">
			{text.split("").map((char, i) => (
				<motion.div
					key={i}
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					exit="hidden"
					transition={{ duration: duration, delay: i * 0.04 + delay }}
					className={className}>
					{char === " " ? <span>&nbsp;</span> : char}
				</motion.div>
			))}
		</div>
	);
}
