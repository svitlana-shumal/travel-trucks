import Link from 'next/link';
import css from './Hero.module.css';

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.heroDiv}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.desc}>You can find everything you want in our catalog</p>
        <Link href="/catalog">
          <button className={css.btn}>View Now</button>
        </Link>
      </div>
    </section>
  );
}
