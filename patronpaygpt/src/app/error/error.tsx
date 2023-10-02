"use client";
import { useEffect } from "react";

type Props = {
	error: any;
	reset: any;
};

export default function Error({ error, reset }: Props) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div>
			<div>ERROR</div>
			<p>Something went wrong!</p>
			<button onClick={() => reset()}>Reset error boundary</button>
		</div>
	);
}
