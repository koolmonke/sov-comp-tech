import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Лабораторная работы по Современным компьютерным технологиям</h1>
		<nav>
			<Link activeClassName={style.active} href="/lab/1">Лаба 1</Link>
			<Link activeClassName={style.active} href="/">Home Page</Link>
		</nav>
	</header>
);

export default Header;
