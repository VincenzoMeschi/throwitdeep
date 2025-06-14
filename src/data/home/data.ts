import { HighImpactHeroProps } from "@/sections/Hero/HighImpact/config";
import { AthleteSectionProps } from "@/sections/Athletes/config";
import { FeaturedCoachesProps } from "@/sections/FeaturedCoaches/config";
import { TrainingProps } from "@/sections/Training/config";
import { LocationsProps } from "@/sections/Locations/config";

export const HighImpactHeroData: HighImpactHeroProps = {
	backgroundImage: {
		src: "/Jeff_Christensen_Hero_Image.jpg",
		alt: "Jeff Christensen training quarterbacks at Throw It Deep.",
	},
	leftSide: {
		signature: {
			src: "/Jeff_Christensen_Signature.svg",
			width: 263,
			height: 62,
			alt: "Fake signature of Jeff Christensen.",
		},
	},
	rightSide: {
		mainHeading: "Train with the best.",
		subHeading:
			"Elite quarterback training in the Dallas-Fort Worth area. Train with the best in the business.",
		buttons: {
			mainButton: {
				type: "primary",
				label: "Book now",
				url: "https://youtube.com",
			},
			secondaryButton: {
				type: "text-only",
				label: "Download our app",
				url: "https://youtube.com",
			},
		},
	},
};

export const AthleteSectionData: AthleteSectionProps = {
	mainHeading: "No fluff - real results.",
	subHeading:
		"Build your confidence the right way. You tap into 35 years of NFL know-how and train with drills that demand your best. You push past limits you never thought possible. You walk away more prepared than ever to lead your team. Confidence is sourced from preparation, so why not prepare with the best in the country?",
	carousel: [
		{
			category: "University of Alabama",
			title: "Ty Simpson",
			src: "https://res.cloudinary.com/dazxax791/image/upload/v1749477663/ty_simpson_sre7ee.jpg",
		},
		{
			category: "University of Cincinnati",
			title: "Brendan Sorsby",
			src: "https://res.cloudinary.com/dazxax791/image/upload/v1749477803/brendan_sorsby_x4c6gu.jpg",
		},
		{
			category: "Georgia Institute of Technology",
			title: "Haynes King",
			src: "https://res.cloudinary.com/dazxax791/image/upload/v1749477878/haynes_king_barbem.jpg",
		},
		{
			category: "University of Alabama",
			title: "Ty Simpson",
			src: "https://res.cloudinary.com/dazxax791/image/upload/v1749477663/ty_simpson_sre7ee.jpg",
		},
		{
			category: "University of Cincinnati",
			title: "Brendan Sorsby",
			src: "https://res.cloudinary.com/dazxax791/image/upload/v1749477803/brendan_sorsby_x4c6gu.jpg",
		},
		{
			category: "Georgia Institute of Technology",
			title: "Haynes King",
			src: "https://res.cloudinary.com/dazxax791/image/upload/v1749477878/haynes_king_barbem.jpg",
		},
	],
};

export const FeaturedCoachesData: FeaturedCoachesProps = {
	mainHeading: "The best in the nation.",
	coaches: [
		{
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1749595003/jeff_christensen_wp2bcs.jpg",
				alt: "Jeff Christensen coaching quarterbacks at a Throw it Deep session",
				width: 1080,
				height: 643,
			},
			name: "Jeff Christensen",
			bio: "Jeff is the founder and Head Quarterback Coach at Throw it Deep. He played QB at Eastern Illinois University, and was inducted into EIU Hall of Fame. He was the 135th player selected in 1983 NFL Draft by Cincinnati Bengals (First QB ever drafted out of EIU). During his 8 years in the NFL, he played for the Bengals, Rams, Eagles, Browns, Jets, and Broncos. Jeff started coaching quarterbacks in 1990, and has since coached over 4,000 quarterbacks.",
		},
		{
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1749595003/jeff_christensen_wp2bcs.jpg",
				alt: "Jeff Christensen coaching quarterbacks at a Throw it Deep session",
				width: 1080,
				height: 643,
			},
			name: "Jeff Christensen",
			bio: "Jeff is the founder and Head Quarterback Coach at Throw it Deep. He played QB at Eastern Illinois University, and was inducted into EIU Hall of Fame. He was the 135th player selected in 1983 NFL Draft by Cincinnati Bengals (First QB ever drafted out of EIU). During his 8 years in the NFL, he played for the Bengals, Rams, Eagles, Browns, Jets, and Broncos. Jeff started coaching quarterbacks in 1990, and has since coached over 4,000 quarterbacks.",
		},
		{
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1749595003/jeff_christensen_wp2bcs.jpg",
				alt: "Jeff Christensen coaching quarterbacks at a Throw it Deep session",
				width: 1080,
				height: 643,
			},
			name: "Jeff Christensen",
			bio: "Jeff is the founder and Head Quarterback Coach at Throw it Deep. He played QB at Eastern Illinois University, and was inducted into EIU Hall of Fame. He was the 135th player selected in 1983 NFL Draft by Cincinnati Bengals (First QB ever drafted out of EIU). During his 8 years in the NFL, he played for the Bengals, Rams, Eagles, Browns, Jets, and Broncos. Jeff started coaching quarterbacks in 1990, and has since coached over 4,000 quarterbacks.",
		},
	],
	ctaButton: {
		type: "primary",
		url: "https://youtube.com",
		label: "See More",
	},
};

export const TrainingSectionData: TrainingProps = {
	mainHeading: "More than just training.",
	content: {
		mainHeading: "Join the family",
		image: {
			src: "https://res.cloudinary.com/dazxax791/image/upload/v1749662353/patrick_mahomes_z6lub7.jpg",
			alt: "Patrick Mahomes hold coach Christensen's grandson after a training session at Throw It Deep.",
			width: 1080,
			height: 1076,
		},
		body: [
			"What we do goes beyond the field. We are more than just a training academy, we are a fraternity of over 10,000 athletes. Not only will you strengthen your fundamentals, gain confidence, and reign command of your offense, but you will take the same position of leadership in life. We build men, and create relationships that will last a lifetime. That is the great thing about this position we play.",
			"If you show up, do the work, and apply the teaching, you will reap the benefits on and off of the field. We will give you the answers to the test, but it is still up to you whether you want to use them.",
			"So, what is it going to be? ",
		],
		primaryButton: {
			label: "Book Now",
			type: "primary",
			url: "https://youtube.com",
		},
		secondaryButton: {
			label: "Download Our App",
			type: "text-only",
			url: "https://yotube.com",
		},
	},
};

export const LocationSectionData: LocationsProps = {
	mainHeading: "Taking the country by storm.",
	cities: [
		{
			stateName: "Texas",
			isComingSoon: true,
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1749663675/texas_nj8s6m.jpg",
				alt: "Skyline image of Dallas-Fort Worth Texas",
				width: 1080,
				height: 596,
			},
		},
		{
			stateName: "Texas",
			isComingSoon: false,
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1749663675/texas_nj8s6m.jpg",
				alt: "Skyline image of Dallas-Fort Worth Texas",
				width: 1080,
				height: 596,
			},
		},
		{
			stateName: "Texas",
			isComingSoon: false,
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1749663675/texas_nj8s6m.jpg",
				alt: "Skyline image of Dallas-Fort Worth Texas",
				width: 1080,
				height: 596,
			},
		},
		{
			stateName: "Texas",
			isComingSoon: false,
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1749663675/texas_nj8s6m.jpg",
				alt: "Skyline image of Dallas-Fort Worth Texas",
				width: 1080,
				height: 596,
			},
		},
		{
			stateName: "Texas",
			isComingSoon: false,
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1749663675/texas_nj8s6m.jpg",
				alt: "Skyline image of Dallas-Fort Worth Texas",
				width: 1080,
				height: 596,
			},
		},
		{
			stateName: "Texas",
			isComingSoon: false,
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1749663675/texas_nj8s6m.jpg",
				alt: "Skyline image of Dallas-Fort Worth Texas",
				width: 1080,
				height: 596,
			},
		},
		{
			stateName: "Texas",
			isComingSoon: false,
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1749663675/texas_nj8s6m.jpg",
				alt: "Skyline image of Dallas-Fort Worth Texas",
				width: 1080,
				height: 596,
			},
		},
		{
			stateName: "Texas",
			isComingSoon: false,
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1749663675/texas_nj8s6m.jpg",
				alt: "Skyline image of Dallas-Fort Worth Texas",
				width: 1080,
				height: 596,
			},
		},
	],
};
