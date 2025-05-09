import { FC, useContext } from 'react';
import { Icon, AnimatedNavLink } from '@ui';
import { Link } from 'react-router-dom';
import { useMobileMenu } from '../../model';
import { useMetrika } from '@lib';
import resumeFile from '../../../../../public/kirill-doroshev-resume.pdf';
import styles from './Header.module.scss';
import { SocialLinks } from '@providers';
import { TIconDataLinks } from './type';

import { useAnimatedNavigate } from '@lib';

// TODO: Распил компонента
// TODO: Выделить данные с хуков в пропсы и кинуть на уровень выше

export const Header: FC = () => {
	const {
		isMobileMenuOpen,
		menuRef,
		mobileMenuContentRef,
		overlayRef,
		toggleMenu,
		closeMenu
	} = useMobileMenu();

	const links: TIconDataLinks = useContext(SocialLinks);

	const animatedNavigate = useAnimatedNavigate();

	const { ym, gtag } = useMetrika();

	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<div className={styles['header__inside-wrapper']}>
					<div className={styles.header__brand}>
						<AnimatedNavLink
							to='/'
							styles={styles.header__link}
							data-text='portfolio'
							data-cy='link-portfolio'
						>
							portfolio
						</AnimatedNavLink>
					</div>

					<nav className={styles.header__nav}>
						<ul className={styles.header__menu}>
							<li className={styles.header__menuItem}>
								<AnimatedNavLink
									to='/'
									styles={styles.header__link}
								>
									About Me
								</AnimatedNavLink>
							</li>
							<li className={styles['header__menu-item']}>
								<AnimatedNavLink
									to='/portfolio'
									styles={styles.header__link}
									data-cy='link-portfolio'
								>
									portfolio
								</AnimatedNavLink>
							</li>
							<li className={styles['header__menu-item']}>
								<a
									href={resumeFile}
									download='kirill-doroshev-resume.pdf'
									className={styles.header__link}
									// SEO Analysis
									onClick={() => {
										ym('reachGoal', 'download-resume');
										gtag('event', 'file_download', {
											event_name: 'file_download'
										});
									}}
								>
									download resume
								</a>
							</li>
							<li className={styles['header__menu-item']}>
								<div className={styles.header__icons}>
									<Icon links={links} />
								</div>
							</li>
						</ul>
					</nav>

					<div
						className={styles['header__mobile-menu']}
						ref={menuRef}
					>
						<button
							className={styles['header__burger-button']}
							onClick={toggleMenu}
						>
							☰
						</button>

						{isMobileMenuOpen && (
							<>
								<div
									className={styles.header__overlay}
									ref={overlayRef}
									onClick={closeMenu}
								/>
								<nav
									className={
										styles['header__mobile-menu-content']
									}
									ref={mobileMenuContentRef}
								>
									<AnimatedNavLink
										to='/'
										styles={styles.header__link}
										onClick={closeMenu}
									>
										About Me
									</AnimatedNavLink>

									<AnimatedNavLink
										to='/portfolio'
										styles={styles.header__link}
										onClick={() => closeMenu()}
										data-cy='link-portfolio'
									>
										portfolio
									</AnimatedNavLink>

									<a
										href={resumeFile}
										download='kirill-doroshev-resume.pdf'
										className={styles.header__link}
										onClick={() => {
											ym('reachGoal', 'download-resume');
											gtag('event', 'file_download', {
												event_name: 'file_download'
											});
											closeMenu();
										}}
									>
										download resume
									</a>
									<div className={styles.header__icons}>
										<Icon links={links} />
									</div>
								</nav>
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};
