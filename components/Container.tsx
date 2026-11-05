import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
	return(
			<div className="max-w-7xl mx-auto mt-5 max-lg:w-full max-lg:py-0 max-lg:px-4">
					{children}
			</div>
	);
}