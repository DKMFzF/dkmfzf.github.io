import { FC } from 'react';
import styles from './profile.module.scss';
import React from 'react';

interface ProfileUIProps {
	name: string;
	email: string;
}

export const ProfileUI: FC<ProfileUIProps> = ({ name, email }) => (
	<div className={styles.profile}>
		<h2>Профиль</h2>
		<div className={styles.info}>
			<p>Имя: {name}</p>
			<p>Email: {email}</p>
		</div>
	</div>
);
