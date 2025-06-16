import React from "react";
import { CTAButtonProps } from "@/lib/types/index";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const CTAButton: React.FC<CTAButtonProps> = ({
	label,
	url,
	type,
	className,
}) => {
	return (
		<button className={cn(className, " rounded-full")}>
			<Link
				scroll={true}
				href={url}
				className={cn(
					"w-fit h-fit py-3.5 rounded-full flex items-center",
					type == "primary"
						? "bg-accent text-accent-foreground px-5 group relative overflow-hidden ease-in-out"
						: type == "secondary"
						? "bg-accent-foreground text-primary px-5 group relative overflow-hidden ease-in-out"
						: "text-secondary bg-none"
				)}>
				{label}
				<span className="absolute inset-0 flex size-full justify-center [transform:skew(-14deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-14deg)_translateX(100%)]">
					<span
						className={cn(
							"relative h-full w-8",
							type == "primary" && "bg-white/40",
							type == "secondary" && "bg-black/10"
						)}
					/>
				</span>
			</Link>
		</button>
	);
};
