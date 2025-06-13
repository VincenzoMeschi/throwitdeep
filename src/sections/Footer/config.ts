import { ImageProps } from "next/image";

export type FooterProps = {
	leftSide: {
		logo: ImageProps;
		email: string;
		phone: string;
		appStore: ImageProps;
		googlePlayStore: ImageProps;
	};
	rightSide: {
		linkGroup: [
			{
				heading: string;
				links: {
					label: string;
					url: string;
				}[];
			},
			{
				heading: string;
				links: {
					label: string;
					url: string;
				}[];
			},
			{
				heading: string;
				links: {
					label: string;
					url: string;
				}[];
			}
		];
	};
};
