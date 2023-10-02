"use client";
import React, { useState } from "react";
import { FormWrapper } from "../wrapper";

type Props = {};

export default function Q1() {
	const [highlighted, setHighlighted] = useState<string>("");
	return (
		<FormWrapper title="How old are you?">
			<div className="h-screen">
				<div className="flex flex-col h-full gap-5">
					<div className="cursor-pointer border border-white rounded-full text-center">
						18-24
					</div>
					<div className="cursor-pointer border border-white rounded-full text-center">
						25-34
					</div>
					<div className="cursor-pointer border border-white rounded-full text-center">
						35-44
					</div>
					<div className="cursor-pointer border border-white rounded-full text-center">
						45-54
					</div>
					<div className="cursor-pointer border border-white rounded-full text-center">
						54-
					</div>
				</div>
			</div>
		</FormWrapper>
	);
}
