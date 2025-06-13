// src/components/Form/config.ts
import { HTMLInputTypeAttribute } from "react";

type Width = "one-third" | "two-thirds" | "half" | "full";

export interface SelectOption {
	label: string;
	value: string;
}

interface BaseField {
	name: string;
	placeholder: string;
	width: Width;
}

export interface InputField extends BaseField {
	// any valid <input> type except textarea
	type: Exclude<HTMLInputTypeAttribute, "textarea">;
}

export interface SelectField extends BaseField {
	type: "select";
	options: SelectOption[];
}

export interface TextAreaField extends BaseField {
	type: "textarea";
	rows?: number;
}

export type Field = InputField | SelectField | TextAreaField;

export type FormProps = {
	formHeading: {
		mainHeading: string;
		subText: string;
	};
	formFields: Field[];
} & React.HTMLAttributes<HTMLDivElement>;
