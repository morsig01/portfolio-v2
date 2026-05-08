import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export default function ThemeToggle() {
	const [theme, setTheme] = useState<'light' | 'dark'>(() =>
		typeof document !== 'undefined' &&
		document.documentElement.classList.contains('dark')
			? 'dark'
			: 'light',
	);

	function toggle() {
		const next = theme === 'dark' ? 'light' : 'dark';
		setTheme(next);
		localStorage.setItem('theme', next);
		document.documentElement.classList.toggle('dark', next === 'dark');
	}

	return (
		<button
			onClick={toggle}
			aria-label="Toggle theme"
			type="button"
			className="flex aspect-square h-full items-center justify-center border-(--border-subtle) border-l-1 hover:cursor-pointer dark:text-white"
		>
			{theme === 'dark' ? (
				<Sun className="h-4 w-4" />
			) : (
				<Moon className="h-4 w-4" />
			)}
		</button>
	);
}
