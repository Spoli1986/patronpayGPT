"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
	function navigate() {}
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<div className="flex flex-col gap-5 items-center justify-center">
				<h1 className="text-xl font-bold">Thank you for visiting PatronGPT!</h1>
				<p>
					First we need to ask some questions, to make sure we understand your
					situation better!
				</p>
				<Link
					className="inline-flex items-center justify-center text-xl h-12 w-24 sm:h-14 sm:w-36 rounded-full border text-center"
					href="/questionnaire"
				>
					Start
				</Link>
			</div>
		</main>
	);
}
