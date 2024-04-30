import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (
        <table className={css.container}>
            <thead>
                <tr>
                    <th className={css.tableHead}>Type</th>
                    <th className={css.tableHead}>Amount</th>
                    <th className={css.tableHead}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => {
                    return (
                        <tr key={item.id} className={css.tRow}>
                            <td className={css.td}>
                                {item.type[0].toUpperCase() +
                                    item.type.slice(1)}
                            </td>
                            <td className={css.td}>{item.amount}</td>
                            <td className={css.td}>{item.currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
