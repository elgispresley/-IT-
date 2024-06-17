'use client'

import Navigation from './navigation/Navigation'
import Link from 'next/link'
import Logo from '../icons/Logo'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import styles from './TheHeader.module.scss'

export const navItems = [
	{ label: 'О нас', href: '/university' },
	{ label: 'Направления', href: '/directions' },
]


const TheHeader = () => {
	const session = useSession()

	return (
		<header className={styles.wrapperHeader}>
			<div className={styles.menu}>
				<Link href={'/'} className={styles.logo}>БТК</Link>
				<nav className={styles.navText}>
					<Navigation navLinks={navItems} />
				</nav>
				{
					session?.data ?
						<Link className={styles.login} href='#'
									onClick={() => signOut({ callbackUrl: '/' })}>Выйти</Link>
						:
						<>
							<Link className={styles.login} href='/signin'>Войти</Link>
						</>
				}
			</div>
		</header>
	)
}

export { TheHeader }
