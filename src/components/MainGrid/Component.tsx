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
				"mx-auto grid grid-cols-[repeat(4,_1fr)] sm:grid-cols-[repeat(6,_1fr)] lg:grid-cols-[repeat(12,_5.625rem)] gap-x-2 px-5 lg:px-0 md:gap-x-5 pt-8 pb-20 w-full max-w-[81.25rem]",
				className
			)}
			{...props}>
			{children}
		</div>
	);
};
