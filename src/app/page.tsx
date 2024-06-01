import { SignedIn, UserButton } from "@clerk/nextjs";

export default async function Home() {
	return (
		<main>
			<SignedIn>
				<UserButton />
			</SignedIn>
		</main>
	);
}
