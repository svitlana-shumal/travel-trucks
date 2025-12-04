'use client';
import css from './Filters.module.css';
import { Map } from 'lucide-react';

interface FilterProps {
  location?: string;
}
export default function Filters() {
  return (
    <div className={css.sideBar}>
      <div className={css.filterCont}>
        <label className={css.location}>Location</label>
        <input className={css.input} type="text" placeholder="City" />
        <Map width={20} height={20} className={css.map} />
      </div>

      <div className={css.filters}>
        <p className={css.desc}>Filters</p>
        <label className={css.equiment} />
      </div>
      <button className={css.btn}>Search</button>
    </div>
  );
}
