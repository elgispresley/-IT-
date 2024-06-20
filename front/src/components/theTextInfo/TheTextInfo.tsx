import React from 'react'
import styles from './TheTextInfo.module.scss'
import Link from "next/link";

interface Props {
	setActive: (value: boolean) => void;
	active: boolean;
}

const TheTextInfo = ({setActive, active}: Props) => {

	function Chenge () {
		setActive(!active);
	}

	return (
		<>
			<p className={styles.text}>
				Добро пожаловать в&nbsp;отделение &laquo;Информационные технологии&raquo;! Мы&nbsp;в&nbsp;Бишкекском техническом
				колледже гордимся
				предоставлением высококачественного образования в&nbsp;сфере информационных технологий. Наше отделение
				предоставляет студентам широкий спектр курсов, охватывающих все от&nbsp;основ программирования
				до&nbsp;разработки
				веб-приложений и&nbsp;анализа данных.
			</p>
			<button onClick={Chenge} className={styles.btnBegin}>Начать</button>
		</>
	)
}

export default TheTextInfo