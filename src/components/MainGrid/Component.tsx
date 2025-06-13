import { cn } from "@/lib/utils";
import React from "react";

export const MainGrid: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	children,
	className,
	...props
}) => {
	return (
		<div
			className={cn(
				"mx-auto grid grid-cols-[repeat(4,_5.625rem)] sm:grid-cols-[repeat(6,_5.625rem)] lg:grid-cols-[repeat(12,_5.625rem)] gap-x-5 pt-8 pb-20 w-fit",
				className
			)}
			{...props}>
			{children}
		</div>
	);
};
