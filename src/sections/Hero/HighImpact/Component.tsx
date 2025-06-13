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
			className="col-span-12 my-26 grid grid-cols-12 gap-5 relative w-full h-[40rem] rounded-3xl overflow-hidden ">
			<Image
				{...backgroundImage}
				className="absolute inset-0 object-cover pt-10 scale-115 -z-0"
			/>

			<motion.div className="col-span-6 w-full h-full relative overflow-hidden">
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
			</motion.div>

			<div className="col-span-6 flex flex-col justify-center z-1 gap-4">
				<GradualSpacing
					className="text-[4rem] font-bold leading-none"
					text={mainHeading}
					duration={0.6}
					delay={0}
				/>
				<TextFade
					children={<p className="text-2xl w-6/8">{subHeading}</p>}
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
		</motion.section>
	);
};
