"use client";
import React, { useState } from "react";
import { FormWrapper } from "../wrapper";

type Props = {};

export default function Q3() {
	const [highlighted, setHighlighted] = useState<string>("");
	return (
		<FormWrapper title="What is your permit type?">
			<div className="h-screen">
				<div className="flex flex-col h-full gap-5">
					<div className="cursor-pointer border border-white rounded-full text-center">
						Swiss
					</div>
					<div className="cursor-pointer border border-white rounded-full text-center">
						B permit (residence permit)
					</div>
					<div className="cursor-pointer border border-white rounded-full text-center">
						C permit (settlement permit)
					</div>
					<div className="cursor-pointer border border-white rounded-full text-center">
						Ci permit (residence permit with gainful employment)
					</div>
					<div className="cursor-pointer border border-white rounded-full text-center">
						G permit (cross-border commuter permit)
					</div>
					<div className="cursor-pointer border border-white rounded-full text-center">
						L permit (short-stay permit)
					</div>
					<div className="cursor-pointer border border-white rounded-full text-center">
						F permit (for temporarily admitted foreigners)
					</div>
					<div className="cursor-pointer border border-white rounded-full text-center">
						N permit (for asylum seekers)
					</div>
					<div className="cursor-pointer border border-white rounded-full text-center">
						S permit (provisional status for persons in need of protection)
					</div>
				</div>
			</div>
		</FormWrapper>
	);
}
