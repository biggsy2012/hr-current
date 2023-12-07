/** @format */

import type { Metadata } from "next";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/lib/provider";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
	title: "NextHR",
	description:
		"Streamline your HR operations with our advanced HR portal, seamlessly integrated with Dynamics 365. Experience efficient talent management, payroll, benefits administration, and employee engagement solutions. Connect, manage, and grow your workforce effectively with our cutting-edge technology and Dynamics 365's robust HR capabilities",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn("min-h-screen bg-background antialiased")}>
				<Providers>
					<Header />
					{children}
					<Toaster />
				</Providers>
			</body>
		</html>
	);
}
