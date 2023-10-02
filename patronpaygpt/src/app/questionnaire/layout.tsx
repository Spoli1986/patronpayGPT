export default function Layout({ children }: any) {
	return (
		<div>
			<div className="flex align-middle justify-center w-full h-full">
				{children}
			</div>
		</div>
	);
}
