"use client";
import { useEffect } from "react";
import styles from "./breaking.module.css";

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
		<div className={styles.error}>
			<div>ERROR</div>
			<p>Something went wrong!</p>
			<button onClick={() => reset()}>Reset error boundary</button>
		</div>
	);
}
