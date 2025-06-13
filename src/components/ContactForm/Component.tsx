"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FormProps, SelectField, TextAreaField } from "./config";
import { cn } from "@/lib/utils";

type FormValues = {
	[key: string]: string;
};

export const ContactForm: React.FC<FormProps> = ({
	formHeading,
	formFields,
	className,
}) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>();

	const onSubmit = async (data: FormValues) => {
		try {
			await sendEmail(data);
			reset();
			alert("Message sent");
		} catch (e) {
			console.error(e);
			alert("Failed to send message");
		}
	};

	return (
		<div className={cn("flex flex-col gap-8 my-26 ", className)}>
			<div className="flex flex-col items-center gap-4">
				<h2 className="text-[4rem] font-bold">
					{formHeading.mainHeading}
				</h2>
				<p className="text-2xl w-1/2 text-center text-[#ffffffa2]">
					{formHeading.subText}
				</p>
			</div>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="grid grid-cols-6 gap-4 auto-rows-auto">
				{formFields.map((field) => {
					const widthClass = getWidthClass(field.width);

					if (field.type === "select") {
						const sel = field as SelectField;
						return (
							<div key={field.name} className={widthClass}>
								<select
									id={field.name}
									{...register(field.name, {
										required: true,
									})}
									className="w-full rounded-xl border bg-input py-3 px-4 focus:outline-none text-border">
									<option value="">{`Select ${field.placeholder}`}</option>
									{sel.options.map((opt) => (
										<option
											key={opt.value}
											value={opt.value}>
											{opt.label}
										</option>
									))}
								</select>
								{errors[field.name] && (
									<p className="text-sm text-red-600 mt-1">
										This field is required
									</p>
								)}
							</div>
						);
					}

					if (field.type === "textarea") {
						const ta = field as TextAreaField;
						return (
							<div key={field.name} className={widthClass}>
								<textarea
									id={field.name}
									rows={ta.rows || 6}
									placeholder={field.placeholder}
									{...register(field.name, {
										required: true,
									})}
									className="w-full rounded-xl border bg-input py-3 px-4 focus:outline-none resize-none"
								/>
								{errors[field.name] && (
									<p className="text-sm text-red-600 mt-1">
										This field is required
									</p>
								)}
							</div>
						);
					}

					// default to input
					return (
						<div key={field.name} className={widthClass}>
							<input
								id={field.name}
								type={field.type}
								placeholder={field.placeholder}
								{...register(field.name, { required: true })}
								className="w-full rounded-xl border bg-input py-3 px-4 focus:outline-none"
							/>
							{errors[field.name] && (
								<p className="text-sm text-red-600 mt-1">
									This field is required
								</p>
							)}
						</div>
					);
				})}

				<button
					type="submit"
					disabled={isSubmitting}
					className="col-span-full w-1/2 mx-auto rounded-md bg-accent mt-5 py-3 px-8 font-semibold text-primary-foreground cursor-pointer">
					{isSubmitting ? "Sending..." : "Submit"}
				</button>
			</form>
		</div>
	);
};

const getWidthClass = (w: string) =>
	({
		"one-third": "md:col-span-2 col-span-full",
		"two-thirds": "md:col-span-4 col-span-full",
		"half": "md:col-span-3 col-span-full",
		"full": "md:col-span-6 col-span-full",
	}[w] || "md:col-span-6 col-span-full");

// client helper to POST to our API route
async function sendEmail(data: FormValues) {
	const res = await fetch("/api/sendEmail", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ formData: data }),
	});
	if (!res.ok) throw new Error("Network error");
	return res.json();
}
