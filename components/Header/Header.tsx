import Link from 'next/link';
import css from './Header.module.css';

export default function Header() {
  return (
    <header>
      <div className={css.container}>
        <Link href="/">
          <svg width={136} height={16}>
            <use href="/symbol-defs.svg#icon-Logo"></use>
          </svg>
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/catalog">Catalog</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
