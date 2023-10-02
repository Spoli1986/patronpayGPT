"use client";

import { FormEvent, ReactNode, useState } from "react";
import Q1 from "../../../components/questionnaire/q1";
import { useMultistepForm } from "../../../utils/useMultiStepForm";
import Q2 from "../../../components/questionnaire/q2";
import Q3 from "../../../components/questionnaire/q3";
import Q4 from "../../../components/questionnaire/q4";
import { useRouter } from "next/navigation";

type Props = { children: ReactNode };

type FormData = {
	q1: string;
	q2: string;
	q3: string;
	q4: string;
};

const INITIAL_DATA = {
	q1: "",
	q2: "",
	q3: "",
	q4: "",
};

export default function Questionnaire() {
	const [data, setData] = useState<FormData>(INITIAL_DATA);
	function updateFields(fields: Partial<FormData>) {
		setData((prev) => {
			return { ...prev, ...fields };
		});
	}
	const router = useRouter();

	const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
		useMultistepForm([
			<Q1 key="#1" />,
			<Q2 key="#2" />,
			<Q3 key="#3" />,
			<Q4 key="#4" />,
		]);

	async function onSubmit(e: FormEvent) {
		e.preventDefault();
		if (!isLastStep) return next();
		router.push("/chat");
	}
	return (
		<div className="flex flex-col gap-5 mt-32">
			<h1>Please first answer a few questions:</h1>
			<div className="w-full bg-gray-200 rounded-full h-2.5 ">
				<div
					className={`bg-blue-600 h-2.5 rounded-full`}
					style={{ ["width"]: ((currentStepIndex + 1) / steps.length) * 100 + "%" }}
				></div>
			</div>
			<form onSubmit={onSubmit} className="flex flex-col gap-3">
				<div key={"1"}>{step}</div>
				<div className="flex flex-row gap-2 justify-between">
					<button
						className="inline-flex items-center justify-center text-xl h-12 w-24 sm:h-14 sm:w-36 rounded-full border border-highlight_blue text-highlight_blue hover:bg-highlight_blue hover:text-white sm:self-end self-center text-center"
						type="button"
						onClick={back}
					>
						Back
					</button>

					<button
						className="inline-flex items-center justify-center text-xl h-12 w-24 sm:h-14 sm:w-36 rounded-full border border-highlight_blue text-highlight_blue hover:bg-highlight_blue hover:text-white sm:self-end self-center sm:mt-5 text-center transition-all duration-300"
						type="submit"
					>
						{isLastStep ? "Start Chat" : "Next"}
					</button>
				</div>
			</form>
		</div>
	);
}
