import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(el => (
          <li key={el.id} className="item">
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
// const Statistics = ({ title, stats }) => {
//   return (
//     <section class="statistics">
//       {title && <h2 class="title">{title}</h2>}
//       <ul class="stat-list">
//         {stats.map(el => (
//           <li key={el.id} class="item">
//             <span class="label">{el.label}</span>
//             <span class="percentage">{el.percentage}%</span>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default Statistics;
