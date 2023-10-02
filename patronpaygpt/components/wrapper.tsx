import { ReactNode } from "react";

type FormWrapperProps = {
	title: string;
	children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
	return (
		<div className="flex flex-col gap-4 mt-3">
			<h2 className=" ">{title}</h2>
			<div className="">{children}</div>
		</div>
	);
}
