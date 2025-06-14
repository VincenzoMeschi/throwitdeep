import React from "react";
import { ContactSectionData } from "@/data/contact/Form";
import { ContactForm } from "@/components/ContactForm/Component";

export default function Home() {
	return (
		<>
			<ContactForm
				className="lg:col-span-8 lg:col-start-3 col-span-4 sm:col-span-6"
				{...ContactSectionData}
			/>
		</>
	);
}
