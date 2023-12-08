/** @format */
import NextAuth, { NextAuthOptions } from "next-auth";
import AzureAD from "next-auth/providers/azure-ad";
import { PrismaClient } from "@prisma/client";

export const authOptions: NextAuthOptions = {
	providers: [
		AzureAD({
			clientId: process.env.AZURE_AD_CLIENT_ID as string,
			clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
			tenantId: process.env.AZURE_AD_TENANT_ID as string,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET as string,
	debug: true
};

const handler = NextAuth(authOptions);

export { handler as POST, handler as GET };
