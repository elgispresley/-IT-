'use client'

import Navigation from './navigation/Navigation'
import Link from 'next/link'
import Logo from '../icons/Logo'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import styles from './TheHeader.module.scss'

export const navItems = [
	{ label: 'Университет', href: '/university' },
	{ label: 'Направления', href: '/directions' },
	{ label: 'Сообщества', href: '/communities' },
	{ label: 'Новости', href: '/news' },
	{ label: 'О нас', href: '/about' }
]


const TheHeader = () => {
	const session = useSession()

	return (
		<header className={styles.wrapperHeader}>
			<div className={styles.menu}>
				<Link href={'/'} className={styles.logo}><Logo /></Link>
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
