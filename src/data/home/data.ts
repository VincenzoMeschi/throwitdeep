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
			category: "Kansas City Chiefs",
			title: "Patrick Mahomes",
			src: "https://res.cloudinary.com/dazxax791/image/upload/v1752297186/mahomes_iwktmz.png",
		},
		{
			category: "University of Alabama",
			title: "Ty Simpson",
			src: "https://res.cloudinary.com/dazxax791/image/upload/v1749477663/ty_simpson_sre7ee.jpg",
		},
		{
			category: "Los Angeles Chargers",
			title: "Trey Lance",
			src: "https://res.cloudinary.com/dazxax791/image/upload/v1752297186/trey_v7zhk0.png",
		},
		{
			category: "University of Cincinnati",
			title: "Brendan Sorsby",
			src: "https://res.cloudinary.com/dazxax791/image/upload/v1749477803/brendan_sorsby_x4c6gu.jpg",
		},
		{
			category: "Las Vegas Raiders",
			title: "Aidan O'Connell",
			src: "https://res.cloudinary.com/dazxax791/image/upload/v1752297186/aidan_ctygqh.png",
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
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1751429162/Jeff_Christensen_Headshot_vxzxbw.jpg",
				alt: "Jeff Christensen coaching quarterbacks at a Throw it Deep session",
			},
			slug: "jeff-christensen",
			name: "Jeff Christensen",
			featuredBio:
				"Throw It Deep is a proven system that turns raw talent into champions through fundamentals. Jeff Christensen founded the program in 2005 after an eight-year NFL career and three decades of coaching quarterbacks. He played at Eastern Illinois University and became the first EIU quarterback drafted when the Bengals picked him 135th overall in 1983. He entered the Eastern Illinois Hall of Fame before starting his coaching career in 1990. Since then he has trained over 4,000 quarterbacks.",
			fullBio: [
				"\"When you apply proper technique with hard work and a great attitude you can accomplish incredible things. Throw It Deep isn't just another quarterback training program—it's the proven system that transforms raw talent into championship-level performers at every level of football. We don't just teach mechanics; we build complete quarterbacks who dominate the mental and physical demands of the position with unmatched precision and confidence.\"",
				"Jeff Christensen serves as Founder and Head Quarterback Coach of Throw It Deep, bringing an unparalleled combination of NFL experience and three decades of quarterback development expertise to the most successful quarterback training program in the nation. A former NFL quarterback who played college football at Eastern Illinois University, Christensen was selected in the fifth round of the 1983 NFL Draft as the 135th overall pick by the Cincinnati Bengals—becoming the first quarterback ever drafted from Eastern Illinois. During his eight-year professional career, he suited up for the Bengals, Rams, Eagles, Browns, Jets, and Broncos, gaining invaluable insights into what separates elite quarterbacks from the rest.",
				"Christensen was later inducted into the Eastern Illinois University Hall of Fame, cementing his legacy before transitioning to coaching in 1990 and founding Throw It Deep in 2005 with a revolutionary approach to quarterback development. Over the past 30 years, he has personally coached over 4,000 quarterbacks, including current NFL superstars Patrick Mahomes, Baker Mayfield, Aidan O'Connell, and Trey Lance, as well as rising college stars like Quinn Ewers.",
				"His systematic approach focuses on building quarterbacks from the ground up, emphasizing proper footwork, throwing mechanics, and body positioning while developing the mental toughness and football IQ necessary for elite performance. Christensen's proven track record speaks volumes: his athletes have earned 60+ state championships, national championships, and over $27 million in scholarships. His innovative training methods have withstood decades of imitation attempts, establishing Throw It Deep as the gold standard for quarterback development at every level of the game.",
			],
			bioImage: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1751434031/JeffPatTrav_soidaf.jpg",
				alt: "Jeff Christensen coaching quarterbacks at a Throw it Deep session",
			},
			extraImages: [
				{
					src: "https://res.cloudinary.com/dazxax791/image/upload/v1749595003/jeff_christensen_wp2bcs.jpg",
					alt: "Jeff Christensen coaching quarterbacks at a Throw it Deep session",
				},
				{
					src: "https://res.cloudinary.com/dazxax791/image/upload/v1749595003/jeff_christensen_wp2bcs.jpg",
					alt: "Jeff Christensen coaching quarterbacks at a Throw it Deep session",
				},
			],
		},
		// {
		// 	image: {
		// 		src: "https://res.cloudinary.com/dazxax791/image/upload/v1751429507/jake_christensen_e91o83.jpg",
		// 		alt: "Jake Christensen coaching quarterbacks at a Throw it Deep session",
		// 	},
		// 	slug: "jake-christensen",
		// 	name: "Jake Christensen",
		// 	featuredBio:
		// 		"Jake Christensen is Chief Operating Officer and Quarterback Coach at Throw It Deep. A former four-star Big Ten quarterback at the University of Iowa and 2005 Army All-American, he threw for over 2,200 yards and 17 touchdowns, including four scores against Syracuse. Since joining the coaching staff Jake has trained elite quarterbacks like Patrick Mahomes, Baker Mayfield, Quinn Ewers and Trey Lance. His blend of high-level playing experience and proven systematic teaching continues to set the standard for quarterback development.",
		// 	fullBio: [
		// 		'"What separates Throw It Deep from every other quarterback training program is our unwavering commitment to loyalty and teaching proper mechanics at their foundational level—we don\'t just chase trends or quick fixes. Our systematic approach builds quarterbacks who understand that mastering fundamentals and staying true to proven techniques is what creates lasting success, not flashy gimmicks that fade away."',
		// 		"Jake Christensen serves as Chief Operating Officer and Quarterback Coach of Throw It Deep, bringing unique credibility as both a former Big Ten quarterback and second-generation quarterback developer. Born into the quarterback training world as the son of founder Jeff Christensen, Jake has lived and breathed the Throw It Deep system his entire life, providing him with an unmatched understanding of what creates elite quarterback performance.",
		// 		"Jake's playing career at the University of Iowa established his credentials as a high-level competitor. As a highly recruited four-star dual-threat quarterback, he participated in the prestigious 2005 Army All-American Bowl before becoming Iowa's starting quarterback. During his college career, Jake threw for over 2,200 yards and 17 touchdowns, including a standout performance against Syracuse where he completed 23 of 32 passes for 278 yards and four touchdowns.",
		// 		"Since transitioning from player to coach, Jake has been instrumental in training elite quarterbacks including Patrick Mahomes, Baker Mayfield, Quinn Ewers, and Trey Lance, ensuring each athlete receives the systematic development that has made Throw It Deep the gold standard in quarterback training. His coaching approach combines his Big Ten playing experience with the proven Throw It Deep methodology, creating a powerful blend that resonates with quarterbacks at every level.",
		// 		"Jake's role extends beyond operations—he's actively changing how quarterback development is approached nationwide. Having experienced both the player and coaching perspectives, Jake understands that sustainable success comes from mastering fundamentals, not chasing shortcuts. His leadership ensures Throw It Deep continues setting the standard for developing championship-caliber quarterbacks who dominate at every level of football.",
		// 	],
		// 	bioImage: {
		// 		src: "https://res.cloudinary.com/dazxax791/image/upload/v1749595003/jeff_christensen_wp2bcs.jpg",
		// 		alt: "Jeff Christensen coaching quarterbacks at a Throw it Deep session",
		// 	},
		// 	extraImages: [
		// 		{
		// 			src: "https://res.cloudinary.com/dazxax791/image/upload/v1749595003/jeff_christensen_wp2bcs.jpg",
		// 			alt: "Jeff Christensen coaching quarterbacks at a Throw it Deep session",
		// 		},
		// 		{
		// 			src: "https://res.cloudinary.com/dazxax791/image/upload/v1749595003/jeff_christensen_wp2bcs.jpg",
		// 			alt: "Jeff Christensen coaching quarterbacks at a Throw it Deep session",
		// 		},
		// 	],
		// },
		// {
		// 	image: {
		// 		src: "https://res.cloudinary.com/dazxax791/image/upload/v1751432084/Christan_Hackenberg_1_lnqema.jpg",
		// 		alt: "Jeff Christensen coaching quarterbacks at a Throw it Deep session",
		// 	},
		// 	slug: "christan-hackenberg",
		// 	name: "Christan Hackenberg",
		// 	featuredBio:
		// 		"Christian Hackenberg is a Quarterback Coach at Throw It Deep. He played at Penn State and threw for over 8400 yards and 48 touchdowns in three seasons. He was selected by the New York Jets in the second round of the 2016 NFL Draft. He applies his experience against elite competition to Jeff Christensen’s systematic approach. He teaches fundamentals and mental preparation to build complete quarterbacks.",
		// 	fullBio: [
		// 		"\"Jeff Christensen doesn't just coach quarterbacks—he works miracles and literally saves careers that others have written off. What Jeff does at Throw It Deep is rescuing the quarterback position from all the noise and gimmicks out there, bringing it back to what actually works. The precision and systematic approach he teaches isn't just important—it's absolutely critical for any quarterback who's serious about reaching their potential and competing at the highest levels.\"",
		// 		"Christian Hackenberg brings elite-level experience and a passion for quarterback development to the Throw It Deep coaching staff, having competed at the highest levels of college and professional football. As Penn State's starting quarterback, Hackenberg threw for over 8,400 yards and 48 touchdowns during his three-year career, earning recognition as one of the Big Ten's premier signal-callers. His arm talent and leadership abilities caught the attention of NFL scouts, leading to his selection by the New York Jets in the second round of the 2016 NFL Draft, where he continued his professional career with multiple organizations.",
		// 		"Hackenberg's transition from player to coach stems from his deep appreciation for the technical precision and systematic approach that Jeff Christensen has perfected at Throw It Deep. Having experienced the challenges of quarterback play at every level, Hackenberg understands the critical importance of proper fundamentals and mental framework that Jeff's philosophy provides. His vision as a quarterback coach centers on sharing the hard-earned lessons from his playing career while implementing Jeff's revolutionary system that transforms how quarterbacks think, process, and execute.",
		// 		"What Hackenberg brings to Throw It Deep is authentic credibility from someone who has stood in the pocket against elite competition and understands the mental and physical demands of the position. His coaching approach combines real-world experience with Jeff's proven methodology, creating a powerful blend that resonates with young quarterbacks seeking to reach the next level. Hackenberg's commitment to Jeff's systematic approach ensures that every quarterback he mentors receives the same foundational excellence that separates champions from the competition, building not just better mechanics but complete quarterbacks ready for any challenge.",
		// 	],
		// 	bioImage: {
		// 		src: "https://res.cloudinary.com/dazxax791/image/upload/v1749595003/jeff_christensen_wp2bcs.jpg",
		// 		alt: "Jeff Christensen coaching quarterbacks at a Throw it Deep session",
		// 	},
		// 	extraImages: [
		// 		{
		// 			src: "https://res.cloudinary.com/dazxax791/image/upload/v1749595003/jeff_christensen_wp2bcs.jpg",
		// 			alt: "Jeff Christensen coaching quarterbacks at a Throw it Deep session",
		// 		},
		// 		{
		// 			src: "https://res.cloudinary.com/dazxax791/image/upload/v1749595003/jeff_christensen_wp2bcs.jpg",
		// 			alt: "Jeff Christensen coaching quarterbacks at a Throw it Deep session",
		// 		},
		// 	],
		// },
		{
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1751430769/Zach_Smith_1_luixya.jpg",
				alt: "Jeff Christensen coaching quarterbacks at a Throw it Deep session",
			},
			slug: "zach-smith",
			name: "Zach Smith",
			featuredBio:
				"Smith is a Quarterback Coach at Throw It Deep. He dominated Division I football over 3½ seasons, first leading Baylor’s offense then the University of Tulsa, throwing for 8 223 yards and 53 touchdowns in 40 games and piling up 463 yards and four scores against third-ranked Oklahoma. The New Orleans Breakers drafted him into the UFL. After training under Jeff Christensen he embraced a systematic focus on fundamentals, mental toughness and decision-making that transformed his consistency. Now he channels that approach to develop quarterbacks in proper mechanics and sustained peak performance.",
			fullBio: [
				'"Extremely grateful to have the opportunity to work alongside Jeff. The passion, experience and track record that he possesses is unmatched. Witnessing the coaching points and knowledge that he passes along, truly opened my eyes to how achievable it is to have great QB play. Having gone through the whole process of using different QB coaches and struggling with consistency in my career. My only regret is not working with Jeff sooner—he could have elevated my game more than any other QB coach or consultant. But, now I get to work with him in a capacity where I can share my passion for the game, and help train the next generation of QBs to ensure they get the best coaching and are able to truly learn the correct mechanics from the ground up."',
				"Smith dominated Division 1 football for 3.5 years as a starting quarterback, first commanding Baylor University's offense before transferring to lead the University of Tulsa. Across 40 combined games, he completed 624 passes for 8,223 yards and 53 touchdowns, including a career-defining performance against third-ranked Oklahoma where he threw for 463 yards and four touchdowns. His talent earned him a spot in professional football when the New Orleans Breakers drafted him into the UFL.",
				"What Smith discovered working with Jeff Christensen completely changed his perspective on quarterback development. After years of bouncing between different coaching philosophies, he finally experienced what true consistency looks like. Jeff's approach doesn't just teach mechanics – it builds the complete quarterback mindset from the ground up.",
				"Where other coaches focus on surface-level adjustments, Jeff develops mental toughness and decision-making that translates directly to game performance. His systematic approach creates quarterbacks who think faster, react better, and maintain composure under pressure. Most importantly, Jeff's methodology emphasizes proper body mechanics that naturally reduce injury risk while maximizing throwing efficiency.",
				"Smith wishes he had found this approach earlier in his career. The difference between scattered coaching and Jeff's comprehensive system isn't just about better statistics – it's about building quarterbacks who can sustain peak performance throughout their careers. Now Smith channels that hard-earned wisdom into developing the next generation, ensuring young quarterbacks get the single-source, comprehensive training that could have extended his own playing days.",
			],
			bioImage: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1751508523/Zach_Smith_1_sfgpfu.jpg",
				alt: "Jeff Christensen coaching quarterbacks at a Throw it Deep session",
			},
			extraImages: [
				{
					src: "https://res.cloudinary.com/dazxax791/image/upload/v1751508523/Zach_Smith_2_txmwnr.jpg",
					alt: "Jeff Christensen coaching quarterbacks at a Throw it Deep session",
				},
			],
		},
		{
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1751431862/TyeFrancis_jvwzsb.jpg",
				alt: "Jeff Christensen coaching quarterbacks at a Throw it Deep session",
			},
			slug: "tye-francis",
			name: "Tye Francis",
			featuredBio:
				"Tye Francis is a Quarterback Coach at Throw It Deep. He was a three-year starting quarterback at Nelson University before spending four years developing talent at Arkansas Tech and MidAmerica Nazarene. At MidAmerica Nazarene he coached two-time All American Caleb Tanis and conference Freshman of the Year Isaiah Williams. He combines his playing background and receiver-coach experience to teach quarterbacks fundamentals and mental toughness. His work with Jeff Christensen gives young QBs the exact skills college coaches seek.",
			fullBio: [
				"\"As a 27-year-old who's been coaching college football for four years, I've seen a lot of quarterback development programs, but Jeff Christensen has completely revolutionized how the position should be played. His systematic approach doesn't just teach mechanics—it transforms how quarterbacks think, process, and execute at a level that's honestly changed my entire perspective on quarterback coaching. The fundamentals and mental framework Jeff instills in his players create a new standard that every serious quarterback should aspire to reach.\"",
				"Tye Francis brings a unique blend of playing experience and coaching innovation to the Arkansas Tech football staff, having spent four years developing talent at the collegiate level. His journey from starting quarterback to respected position coach provides him with invaluable insight into what separates good quarterbacks from great ones.",
				"During his tenure at MidAmerica Nazarene University as Wide Receivers Coach, Francis developed two-time All-American Caleb Tanis and Heart of America Conference Freshman of the Year Isaiah Williams, demonstrating his ability to maximize player potential. His coaching philosophy emphasizes the critical connection between quarterback play and receiver development—understanding that elite quarterbacks elevate everyone around them.",
				"Francis's playing background as a three-year starting quarterback at Nelson University gives him authentic credibility when evaluating quarterback talent and development programs. Having experienced the position's demands firsthand, he recognizes the transformational impact that proper training can have on a player's career trajectory.",
				"His multi-sport athletic background at La Vega and Connally High Schools, earning all-district honors in football, basketball, and track, reflects the well-rounded athleticism essential for modern quarterback success. This diverse experience allows Francis to identify what makes certain training programs truly special.",
				"Francis's partnership with Jeff Christensen and Throw It Deep represents the perfect marriage of collegiate coaching experience and specialized quarterback development. Young quarterbacks benefit from Francis's understanding of what college coaches seek, combined with Christensen's proven system for developing those exact qualities.",
			],
			bioImage: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1751508524/Tye_Francis_2_wsqltn.jpg",
				alt: "Jeff Christensen coaching quarterbacks at a Throw it Deep session",
			},
			extraImages: [
				{
					src: "https://res.cloudinary.com/dazxax791/image/upload/v1751431862/TyeFrancis_jvwzsb.jpg",
					alt: "Jeff Christensen coaching quarterbacks at a Throw it Deep session",
				},
			],
		},
	],
	ctaButton: {
		label: "See More",
		type: "primary",
		url: "/coaches",
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
			isComingSoon: false,
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1749663675/texas_nj8s6m.jpg",
				alt: "Skyline image of Dallas-Fort Worth Texas",
				width: 1080,
				height: 596,
			},
		},
		{
			stateName: "Kansas",
			isComingSoon: false,
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1751434889/kansas_lz1lv3.png",
				alt: "Skyline image of Kansas",
				width: 1080,
				height: 596,
			},
		},
		{
			stateName: "Illinois",
			isComingSoon: true,
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1751434893/illinois_q1pzuk.png",
				alt: "Skyline image of Illinois",
				width: 1080,
				height: 596,
			},
		},
		{
			stateName: "Florida",
			isComingSoon: true,
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1751434894/florida_wzyzar.png",
				alt: "Skyline image of Florida",
				width: 1080,
				height: 596,
			},
		},
		{
			stateName: "Oklahoma",
			isComingSoon: true,
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1751434889/oklahoma_um6tv2.png",
				alt: "Skyline image of Oklahoma",
				width: 1080,
				height: 596,
			},
		},
		{
			stateName: "Pennsylvania",
			isComingSoon: true,
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1751434892/pennsylvania_cykrsw.png",
				alt: "Skyline image of Pennsylvania",
				width: 1080,
				height: 596,
			},
		},
		{
			stateName: "Georgia",
			isComingSoon: true,
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1751434888/georgia_uxqvfk.png",
				alt: "Skyline image of Georgia",
				width: 1080,
				height: 596,
			},
		},
		{
			stateName: "New Jersey",
			isComingSoon: true,
			image: {
				src: "https://res.cloudinary.com/dazxax791/image/upload/v1751434891/newjersey_zw3ioh.png",
				alt: "Skyline image of New Jersey",
				width: 1080,
				height: 596,
			},
		},
	],
};
