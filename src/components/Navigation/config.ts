import { CTAButtonProps, ImageProps, LinkProps } from "@/lib/types";

export type NavigationProps = {
	logoSettings: ImageProps;
	navLinks: LinkProps[];
	ctaButton: CTAButtonProps;
} & React.HTMLAttributes<HTMLDivElement>;
