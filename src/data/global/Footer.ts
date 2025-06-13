import { FooterProps } from "@/sections/Footer/config";

export const footerData: FooterProps = {
	leftSide: {
		logo: {
			src: "./ThrowItDeep_Logo.svg",
			alt: "Throw It Deep Logo",
			width: 200,
			height: 35,
		},
		email: "info@throwitdeep.com",
		phone: "630-999-9999",
		appStore: {
			src: "https://res.cloudinary.com/dazxax791/image/upload/v1749666294/app_store_download_tztcf6.png",
			alt: "Download on App Store",
			width: 132,
			height: 40,
		},
		googlePlayStore: {
			src: "https://res.cloudinary.com/dazxax791/image/upload/v1749666294/google_play_download_o6ojrn.png",
			alt: "Download on Google Play store.",
			width: 132,
			height: 40,
		},
	},
	rightSide: {
		linkGroup: [
			{
				heading: "Sitemap",
				links: [
					{
						label: "Home",
						url: "/home",
					},
					{
						label: "About Us",
						url: "/about",
					},
					{
						label: "Training",
						url: "/training",
					},
					{
						label: "Contact",
						url: "/contact",
					},
					{
						label: "Book Session",
						url: "https://youtube.com",
					},
				],
			},
			{
				heading: "Social Media",
				links: [
					{
						label: "Facebook",
						url: "https://facebook.com",
					},
					{
						label: "Youtube",
						url: "https://youtube.com",
					},
					{
						label: "X",
						url: "https://x.com",
					},
					{
						label: "Instagram",
						url: "https://instagram.com",
					},
				],
			},
			{
				heading: "Extra Links",
				links: [
					{
						label: "Terms of Service",
						url: "/tos",
					},
					{
						label: "Privacy Policy",
						url: "/privacy",
					},
				],
			},
		],
	},
};
