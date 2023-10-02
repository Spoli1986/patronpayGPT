"use client";
import React, { useState } from "react";
import { FormWrapper } from "../wrapper";

type Props = {};

export default function Q2() {
	const [highlighted, setHighlighted] = useState<string>("");
	return (
		<FormWrapper title="Do you have children?">
			<div className="h-screen">
				<div className="flex flex-col h-full gap-5">
					<div className="cursor-pointer border border-white rounded-full text-center">
						yes
					</div>
					<div className="cursor-pointer border border-white rounded-full text-center">
						no
					</div>
				</div>
			</div>
		</FormWrapper>
	);
}
