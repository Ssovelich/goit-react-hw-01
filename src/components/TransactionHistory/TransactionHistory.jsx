import styles from './TransactionHistory.module.css'

const TransactionHistory = (props) => {
  const { items } = props;

    return (
        <div>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr className={styles.theadTr}>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody className={styles.tbody}>
                    
                    {items.map(({ id, type, amount, currency }) => {
                        return (
                            <tr key={id}>
                                <td>{type}</td>
                                <td>{amount}</td>
                                <td>{currency}</td>
                            </tr>
                        );
                    })}
                    
                </tbody>
            </table>
        </div>
  )
}

export default TransactionHistory