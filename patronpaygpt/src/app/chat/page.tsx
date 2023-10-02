"use client";
import React, { useState } from "react";

type Props = {};

export default function Chat() {
	const [prompt, setPrompt] = useState<string>();
	return (
		<div className="flex min-h-screen flex-col items-center justify-end p-24">
			<div className="z-10 flex flex-col max-w-5xl w-full items-center justify-between align-bottom font-mono text-sm h-4/5 lg:flex">
				<label htmlFor="">What would you like to know?</label>
				<textarea
					placeholder="Please type your question here..."
					className="text-black h-20 w-3/5 outline-none"
					value={prompt}
					onChange={(e) => setPrompt(e.target.value)}
				/>
			</div>
		</div>
	);
}
