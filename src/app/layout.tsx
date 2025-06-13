import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { MainGrid } from "@/components/MainGrid/Component";
import { Navigation } from "@/components/Navigation/Component";
import { navigationData } from "@/data/global/Navigation";
import { footerData } from "@/data/global/Footer";
import { Footer } from "@/sections/Footer/Component";

export const fontSFPro = localFont({
	src: [
		{
			path: "../fonts/sf-pro-display-bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../fonts/sf-pro-display-semibold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../fonts/sf-pro-display-regular.woff2",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-sfPro",
});

export const metadata: Metadata = {
	title: "Throw It Deep | Football Training Academy",
	description:
		"Quarterback and Wide Receiver Training Academy in Dallas-Fort Worth Texas founded by ex-NFL quarterback Jeff Christensen. Book Now, All ages Welcome.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`antialiased h-full bg-accent`}>
				<Navigation {...navigationData} />
				<MainGrid>{children}</MainGrid>
				<Footer {...footerData} />
			</body>
		</html>
	);
}
