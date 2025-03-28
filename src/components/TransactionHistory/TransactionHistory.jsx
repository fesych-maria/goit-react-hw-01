import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.heading}>
        <tr className={css.row}>
          <th className={css.headingText}>Type</th>
          <th className={css.headingText}>Amount</th>
          <th className={css.headingText}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.body}>
        {items.map(item => (
          <tr key={item.id} className={css.row}>
            <td className={css.data}>{item.type}</td>
            <td className={css.data}>{item.amount}</td>
            <td className={css.data}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
