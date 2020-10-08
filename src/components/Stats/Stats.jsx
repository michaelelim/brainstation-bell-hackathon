import React from 'react';
import './Stats.scss';
import stats1 from '../../assets/Images/Stats-1.png';
import stats2 from '../../assets/Images/Stats-2.png';
import stats3 from '../../assets/Images/Stats-3.png';

function Stats() {
  return (
    <section className="stats">
      <img src={stats1} alt="Stats 1" className="stats__image"/>
      <img src={stats2} alt="Stats 2" className="stats__image"/>
      <img src={stats3} alt="Stats 3" className="stats__image"/>
  </section>
  );
}

export default Stats;
