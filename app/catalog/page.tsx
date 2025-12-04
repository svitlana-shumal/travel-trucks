'use client';

import Loader from '@/components/Loader/Loader';
import css from './Catalog.module.css';
import Filters from '@/components/Filters/Filters';
// import CamperCard from '@/components/CamperCard/CamperCard';

export default function Catalog() {
  return (
    <main>
      <div className={css.container}>
        {/* <CamperCard /> */}
        <Filters />
        {/* {<Loader />} */}
        <button className={css.btn}>Load more</button>
      </div>
    </main>
  );
}
