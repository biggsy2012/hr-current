"use client";
// nextjs 14 component for header section of the layout component
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "./ui/button";
import { NavigationMenuHR } from "./navMenu";

const Header = () => {
	const { data: session, status } = useSession();
	const router = useRouter();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const closeMenuafterNavigation = () => setIsMenuOpen(false);

	return (
		<header className="sticky top-0 z-50 text-white bg-blue-800">
			<div className="flex items-center justify-between px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex items-center">
					<Link href="/">
						<span className="ml-2 text-xl font-bold">NextHR</span>
					</Link>
				</div>
				<NavigationMenuHR />
				<nav className="flex items-center">
					<Button
						type="button"
						className="flex items-center justify-center w-10 h-10 ml-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{status === "unauthenticated" ? (
							<Skeleton className="w-6 h-6 bg-gray-800 rounded-full" />
						) : (
							<Avatar>
								<AvatarImage src={session?.user?.image} />
								<AvatarFallback>HR</AvatarFallback>
							</Avatar>
						)}
					</Button>
				</nav>
			</div>
			<div
				className={cn(
					"absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-50",
					isMenuOpen ? "block" : "hidden"
				)}
				onClick={() => setIsMenuOpen(false)}
			/>
			<div
				className={cn(
					"absolute top-0 left-0 z-20 w-64 h-full bg-background shadow",
					isMenuOpen ? "block" : "hidden"
				)}
			>
				<div className="flex items-center justify-between px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<Link href="/">
						<Image
							src="/logo.png"
							alt="NextHR"
							width={40}
							height={40}
							className="w-10 h-10"
						/>
						<span className="ml-2 text-xl font-bold">NextHR</span>
					</Link>
					<Button
						type="button"
						className="flex items-center justify-center w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6 text-gray-200"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</Button>
				</div>
				<div className="flex flex-col items-center justify-center flex-1">
					<div className="flex flex-col items-center justify-center">
						<div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary">
							<Avatar>
								<AvatarImage src={session?.user?.image} />
								<AvatarFallback>N-HR</AvatarFallback>
							</Avatar>
						</div>
						<h2 className="mt-4 text-xl font-bold text-white">
							{session?.user?.name}
						</h2>
						<p className="text-sm font-medium text-white">
							{session?.user?.email}
						</p>
					</div>
					<div className="flex flex-col mt-8">
						<Link href="/" onClick={closeMenuafterNavigation}>
							<span className="flex items-center px-4 py-2 text-lg font-bold text-white rounded hover:bg-gray-100">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6 mr-2 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 10h16M4 14h16M4 18h16"
									/>
								</svg>
								Home
							</span>
						</Link>
						<>
							{status === "authenticated" ? (
								<Link href="/profile" onClick={closeMenuafterNavigation}>
									<span className="flex items-center px-4 py-2 mt-2 text-lg font-bold text-white rounded hover:bg-gray-100">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 mr-2 text-white"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M15 14a3 3 0 11-6 0 3 3 0 016 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 20v-1a7 7 0 0114 0v1"
											/>
										</svg>
										Profile
									</span>
								</Link>
							) : null}
							{status === "authenticated" ? (
								<Link href="/settings" onClick={closeMenuafterNavigation}>
									<span className="flex items-center px-4 py-2 mt-2 text-lg font-bold text-white rounded hover:bg-gray-100">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 mr-2 text-white"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M19 14l-7 7m0 0l-7-7m7 7V3"
											/>
										</svg>
										Settings
									</span>
								</Link>
							) : (
								<Button
									type="button"
									className="flex items-center justify-center w-full py-2 mt-4 text-lg font-bold text-white rounded bg-primary hover:bg-primary-dark"
									onClick={() => signIn()}
								>
									Sign up
								</Button>
							)}
						</>
					</div>
				</div>
				{status === "authenticated" ? (
					<Button
						type="button"
						className="flex items-center justify-center w-full py-2 mt-4 text-lg font-bold text-white rounded bg-primary hover:bg-primary-dark"
						onClick={() => signOut()}
					>
						Sign out
					</Button>
				) : (
					<Button
						type="button"
						className="flex items-center justify-center w-full py-2 mt-4 text-lg font-bold text-white rounded bg-primary hover:bg-primary-dark"
						onClick={() => signIn()}
					>
						Sign in
					</Button>
				)}
			</div>
		</header>
	);
};

export default Header;
