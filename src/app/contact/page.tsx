import React from "react";
import { ContactSectionData } from "@/data/contact/Form";
import { ContactForm } from "@/components/ContactForm/Component";

export default function Home() {
	return (
		<>
			<ContactForm
				className="col-span-8 col-start-3"
				{...ContactSectionData}
			/>
		</>
	);
}
