import React from "react";
import { LocationsProps } from "@/sections/Locations/config";
import { StateCard } from "@/components/StateCard/Component";

export const Locations: React.FC<LocationsProps> = ({
	mainHeading,
	cities,
}) => {
	return (
		<div className="contents">
			<h2
				className="col-span-12 text-center text-5xl font-bold mt-26"
				id="locations">
				{mainHeading}
			</h2>
			<div className="col-span-12 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-5 gap-y-5 mt-20">
				{cities.map((city, i) => {
					return <StateCard key={i} {...city} />;
				})}
				<div className="col-span-4 flex flex-col p-5 justify-end rounded-3xl overflow-hidden h-56">
					<h4 className="font-bold text-4xl">
						Don&apos;t see your state?
					</h4>
					<p>
						<a className="underline" href="https://youtube.com">
							Contact us.
						</a>{" "}
						We expand based on demand.
					</p>
				</div>
			</div>
		</div>
	);
};
