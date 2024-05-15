'use client'

import React, { useState } from "react";
import LinkedinIcon from '@/components/theFooter/icons/LinkedinIcon'
import InstagramIcon from '@/components/theFooter/icons/InstagramIcon'
import TwitterIcon from '@/components/theFooter/icons/TwitterIcon'
import FacebookIcons from '@/components/theFooter/icons/FacebookIcons'
import {useSession} from "next-auth/react";
import Link from 'next/link'
import styles from './TheFooter.module.scss'

interface Props {
	email: string;
	processed: boolean;
	name: any;
}

const TheFooter = () => {
	const session = useSession();
	const [newDirection, setNewDirection] = useState<Props>({
		email: '',
		processed: false,
		name: '',
	});

	const handleChange = (e: any) => {
		const {name, value} = e.target;
		setNewDirection(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const formData = new FormData();
			formData.append('email', newDirection.email);
			formData.append('name', newDirection.name);
			formData.append('processed', newDirection.processed.toString());

			const response = await fetch('http://localhost:5000/api/application/', {
				method: 'POST',
				body: formData,
			});

			if (response.ok) {
				console.log('добавлен объект');
			} else {
				console.error('Ошибка при добавлении нового направления:', response.statusText);
			}
		} catch (error) {
			console.error('Ошибка при выполнении запроса:', error);
		}
	};

	return (
		<footer className={styles.footer}>
			<div className={styles.componentFooter}>
				<form className={styles.headerInput} onSubmit={handleSubmit}>
					<h2 className={styles.nameFooter}>Оставьте вашу почту и мы свяжемся с вами </h2>
					<div className={styles.inputEmail}>
						<input type='email' name='email' value={newDirection.email} className={styles.inputText}
							   placeholder='Email address' onChange={handleChange}/>
						<div className={styles.checboxInfo}>
							<div>
								<input type='checkbox' name='name' value={session.data?.user?.name ?? ''} required onChange={handleChange} className={styles.checkbox} />
							</div>
							<p className={styles.textInput}>
								Я подтверждаю, что мне больше 16 лет, и я согласен с Условиями
								использования
								и Уведомлением о конфиденциальности.
							</p>
						</div>
					</div>
					{
						session?.data ? <button className={styles.submit} >Отправить</button> :
							<div className={styles.warning}>Для того что бы отправить email вы должны авторизоваться</div>
					}
				</form>
				<ul className={styles.footerBlock}>
					<li>
						<Link href='/'>
							<FacebookIcons />
						</Link>
					</li>
					<li>
						<Link href='/'>
							<InstagramIcon />
						</Link>
					</li>
					<li>
						<Link href='/'>
							<TwitterIcon />
						</Link>
					</li>
					<li>
						<Link href='/'>
							<LinkedinIcon />
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export { TheFooter }
