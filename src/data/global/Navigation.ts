import { NavigationProps } from "@/components/Navigation/config";

export const navigationData: NavigationProps = {
	logoSettings: {
		src: "/ThrowItDeep_Logo.svg",
		alt: "Throw It Deep Logo",
		width: 200,
		height: 35,
	},
	navLinks: [
		{
			label: "Home",
			url: "/",
		},
		{
			label: "About",
			url: "#about",
		},
		{
			label: "Training",
			url: "#training",
		},
		{
			label: "Coaches",
			url: "/coaches",
		},
		{
			label: "Contact",
			url: "/contact",
		},
	],
	ctaButton: {
		label: "Book Now",
		url: "https://www.youtube.com",
		type: "secondary",
	},
};
