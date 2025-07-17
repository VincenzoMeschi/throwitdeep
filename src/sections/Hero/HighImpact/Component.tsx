import React from "react";
import { HighImpactHeroProps } from "@/sections/Hero/HighImpact/config";
import Image from "next/image";
import { CTAButton } from "@/components/CTAButton/Component";
import * as motion from "motion/react-client";
import { GradualSpacing } from "@/components/AnimatedText/Component";
import { TextFade } from "@/components/FadeIn/Component";

export const HighImpactHero: React.FC<HighImpactHeroProps> = ({
	backgroundImage,
	leftSide,
	rightSide,
}) => {
	const { mainHeading, subHeading, buttons } = rightSide;
	return (
		<motion.section
			transition={{ ease: "" }}
			id="home"
			className="col-span-full mt-36 mb-26 md:my-26 grid grid-cols-[repeat(4,_1fr)] sm:grid-cols-[repeat(6,_1fr)] lg:grid-cols-[repeat(12,_5.625rem)] gap-x-2 md:gap-x-5 max-w-[81.25rem] gap-5 relative w-full h-[30rem] md:h-[40rem] md:rounded-3xl overflow-hidden ">
			<div className="hidden md:block lg:col-span-6 md:col-span-3 col-span-2 w-full h-full relative overflow-hidden z-20">
				{leftSide.signature && (
					<motion.div
						className="absolute bottom-10 left-10"
						style={{ willChange: "clip-path" }}
						initial={{ clipPath: "inset(0 100% 0 0)" }}
						animate={{
							clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
						}}
						transition={{
							duration: 1.5,
							ease: "easeInOut",
							delay: 2.5,
						}}>
						<Image {...leftSide.signature} />
					</motion.div>
				)}
			</div>
			{leftSide.signature && (
				<motion.div
					className="absolute md:hidden bottom-10 -right-5 z-30"
					style={{ willChange: "clip-path" }}
					initial={{ clipPath: "inset(0 100% 0 0)" }}
					animate={{
						clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
					}}
					transition={{
						duration: 1.5,
						ease: "easeInOut",
						delay: 2.5,
					}}>
					<Image className="scale-75" {...leftSide.signature} />
				</motion.div>
			)}

			<div className="lg:col-span-6 md:col-span-3 col-span-full h-fit md:h-full flex flex-col justify-center z-1 gap-4">
				<GradualSpacing
					className="block sm:hidden lg:block text-[2rem] md:text-[4rem] font-bold leading-none"
					text={mainHeading}
					duration={0.6}
					delay={0}
				/>
				<h1 className="hidden sm:block lg:hidden text-[2.5rem] md:text-[4rem] font-bold leading-none">
					{mainHeading}
				</h1>
				<TextFade
					children={
						<p className="text-xl md:text-2xl md:w-6/8">
							{subHeading}
						</p>
					}
					direction="up"
					delay={1.2}
				/>
				<div className="flex gap-6">
					{/* <CTAButton {...buttons.mainButton} />
					<CTAButton {...buttons.secondaryButton} /> */}
					<TextFade
						children={<CTAButton {...buttons.mainButton} />}
						direction="up"
						delay={1.6}
					/>
					<TextFade
						children={<CTAButton {...buttons.secondaryButton} />}
						direction="up"
						delay={1.8}
					/>
				</div>
			</div>
			<Image
				{...backgroundImage}
				width={2560}
				height={1440}
				className="col-span-full md:absolute h-full rounded-3xl md:rounded-none overflow-hidden inset-0 object-cover md:pt-10 md:scale-115 -z-0"
			/>
		</motion.section>
	);
};
