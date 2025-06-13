import { FormProps } from "@/components/ContactForm/config";

export const ContactSectionData: FormProps = {
	formHeading: {
		mainHeading: "Contact us.",
		subText:
			"Have a question? Reach out using the form below, and we will respond via email within 1-3 business days.",
	},
	formFields: [
		{
			type: "text",
			name: "firstName",
			placeholder: "First Name",
			width: "half",
		},
		{
			type: "text",
			name: "lastName",
			placeholder: "Last Name",
			width: "half",
		},
		{
			type: "email",
			name: "email",
			placeholder: "Email Address",
			width: "two-thirds",
		},
		{
			type: "select",
			name: "locations",
			placeholder: "Location",
			width: "one-third",
			options: [{ label: "Dallas, TX", value: "dallas" }],
		},
		{
			type: "textarea",
			name: "message",
			placeholder: "Message",
			width: "full",
		},
	],
};
