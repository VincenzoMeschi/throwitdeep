import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "motion/react";
import { Position } from "@/components/SlideTabs/config";
import { LinkProps } from "@/lib/types";
import Link from "next/link";

export const SlideTabsExample = ({ links }: { links: LinkProps[] }) => {
	return (
		<div className="col-start-4 col-span-6">
			<SlideTabs links={links} />
		</div>
	);
};

const SlideTabs = ({ links }: { links: LinkProps[] }) => {
	const [position, setPosition] = useState<Position>({
		left: 0,
		width: 0,
		opacity: 0,
	});

	return (
		<ul
			onMouseLeave={() => {
				setPosition((pv) => ({
					...pv,
					opacity: 0,
				}));
			}}
			className="relative mx-auto flex w-fit items-center justify-center rounded-full bg-[#343434] p-1">
			{links.map((link, i) => {
				return (
					<Tab key={i} setPosition={setPosition}>
						<Link
							href={link.url}
							className="block w-full h-full md:px-5 md:py-3 px-3 py-1.5">
							{link.label}
						</Link>
					</Tab>
				);
			})}

			<Cursor position={position} />
		</ul>
	);
};

const Tab = ({
	children,
	setPosition,
}: {
	children: React.ReactNode;
	setPosition: Dispatch<SetStateAction<Position>>;
}) => {
	const ref = useRef<null | HTMLLIElement>(null);

	return (
		<li
			ref={ref}
			onMouseEnter={() => {
				if (!ref?.current) return;

				const { width } = ref.current.getBoundingClientRect();

				setPosition({
					left: ref.current.offsetLeft,
					width,
					opacity: 1,
				});
			}}
			className="z-10 h-fit w-fit block cursor-pointer text-white md:text-base">
			{children}
		</li>
	);
};

const Cursor = ({ position }: { position: Position }) => {
	return (
		<motion.li
			animate={{
				...position,
			}}
			className="absolute z-0 h-7 rounded-full bg-[#707070] md:h-12"
		/>
	);
};
