import Link from 'next/link'

export default function DirectionsLayout({
																					 children
																				 }: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<h1>Directions</h1>
			<ul>
				<li>
					<Link href='/about/contacts'>Contacts</Link>
				</li>
				<li>
					<Link href='/about/team'>Team</Link>
				</li>
			</ul>
			{children}
		</div>
	)
}
