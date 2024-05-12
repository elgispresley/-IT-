'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import styles from './Navigation.module.scss'

type NavLink = {
	label: string;
	href: string;
}

type Props = {
	navLinks: NavLink[];
}

const Navigation = ({ navLinks }: Props) => {
	const [isActive, setActive] = useState<boolean>()
	const session = useSession()

	return (
		<>
			{navLinks.map((link) => {
				return (
					<Link key={link.label} href={link.href}
								className={styles.textLink}>
						{link.label}
					</Link>
				)
			})}
			{
				session?.data && (
					<Link className={styles.textLink}
								href='/profile'>Профиль</Link>
				)
			}
		</>
	)
}

export default Navigation