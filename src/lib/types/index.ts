import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { SvgIconComponent } from "@mui/icons-material";
import { ReactHTMLElement } from "react";

export type ImageProps = {
	src: StaticImport | string;
	alt: string;
	width?: number;
	height?: number;
	fill?: boolean;
	imagePositionOverride?: [number, number];
};

export type CTAButtonProps = {
	label: string;
	icon?: SvgIconComponent;
	url: URL | string;
	type: "primary" | "secondary" | "text-only";
} & React.HTMLAttributes<HTMLDivElement>;

export type LinkProps = {
	label: string;
	url: string;
};

export type Input = {
	
}
