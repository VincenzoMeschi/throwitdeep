import React from "react";
import { FooterProps } from "@/sections/Footer/config";
import { MainGrid } from "@/components/MainGrid/Component";
import Image from "next/image";
import { PhoneRounded, EmailRounded } from "@mui/icons-material";
import Link from "next/link";

export const Footer: React.FC<FooterProps> = ({ leftSide, rightSide }) => {
	const { logo, email, phone, appStore, googlePlayStore } = leftSide;
	return (
		<footer className="w-full py-6 bg-primary">
			<MainGrid>
				<div className="col-span-3 flex flex-col gap-7">
					<Image {...logo} className="w-full" />
					<div className="flex flex-col gap-3">
						<div className="flex gap-3 items-center">
							<div className="rounded-full bg-white p-0.5">
								<PhoneRounded className="text-primary scale-65" />
							</div>
							<a href={`dial:${phone}`}>{phone}</a>
						</div>
						<div className="flex gap-3 items-center">
							<div className="rounded-full bg-white p-0.5">
								<EmailRounded className="text-primary scale-65" />
							</div>
							<a href={`mailto:${email}`}>{email}</a>
						</div>
					</div>
					<div className="flex gap-3 items-center">
						<a className="w-1/2" href="https://youtube.com">
							<Image className="w-full" {...appStore} />
						</a>

						<a className="w-1/2" href="https://youtube.com">
							<Image className="w-full" {...googlePlayStore} />
						</a>
					</div>
				</div>
				<div className="col-start-7 col-span-2">
					<h6 className="font-semibold mb-4">
						{rightSide.linkGroup[0].heading}
					</h6>
					<ol>
						{rightSide.linkGroup[0].links.map((link, i) => {
							return (
								<li key={i} className="mb-2">
									<Link key={i} href={link.url}>
										{link.label}
									</Link>
								</li>
							);
						})}
					</ol>
				</div>
				<div className="col-start-9 col-span-2">
					<h6 className="font-semibold mb-4">
						{rightSide.linkGroup[1].heading}
					</h6>
					<ol>
						{rightSide.linkGroup[1].links.map((link, i) => {
							return (
								<li key={i} className="mb-2">
									<Link key={i} href={link.url}>
										{link.label}
									</Link>
								</li>
							);
						})}
					</ol>
				</div>
				<div className="col-start-11 col-span-2">
					<h6 className="font-semibold mb-4">
						{rightSide.linkGroup[2].heading}
					</h6>
					<ol>
						{rightSide.linkGroup[2].links.map((link, i) => {
							return (
								<li key={i} className="mb-2">
									<Link key={i} href={link.url}>
										{link.label}
									</Link>
								</li>
							);
						})}
					</ol>
				</div>
			</MainGrid>
			<div className="flex w-full py-2 justify-center bg-[#7070703d]">
				<p className="text-[#ffffff7e]">
					Designed and Developed by{" "}
					<a
						className="underline"
						href="https://linkedin.com/in/vincenzomeschi">
						Vincenzo Meschi
					</a>
				</p>
			</div>
		</footer>
	);
};
