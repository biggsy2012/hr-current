"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Define HR system related components
const hrComponents = [
	{
		title: "Employee Directory",
		href: "/hr/employee-directory",
		description: "Browse and manage employee records and contact information.",
	},
	{
		title: "Time Off Requests",
		href: "/hr/time-off",
		description: "Manage and approve employee leave and time-off requests.",
	},
	{
		title: "Performance Reviews",
		href: "/hr/performance-reviews",
		description: "Conduct and record employee performance evaluations.",
	},
	{
		title: "Payroll Management",
		href: "/hr/payroll",
		description: "Oversee payroll processing, payslips, and tax documents.",
	},
	{
		title: "Recruitment",
		href: "/hr/recruitment",
		description: "Track and manage job postings, applications, and interviews.",
	},
	{
		title: "Training and Development",
		href: "/hr/training",
		description:
			"Plan and organize employee training and professional development programs.",
	},
];

export function NavigationMenuHR() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Employee</NavigationMenuTrigger>
					<NavigationMenuContent className="bg-background">
						<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<ListItem href="/hr/dashboard" title="Dashboard">
								Overview of HR activities and metrics.
							</ListItem>
							<ListItem href="/hr/settings" title="Settings">
								Configure HR system settings and preferences.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Supervisor</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							{hrComponents.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}
								>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/hr/help" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Manager
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
