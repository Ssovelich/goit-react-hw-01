// import TransactionItem from "./TransactionItem";

const TransactionHistory = (props) => {
  const { items } = props;

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    
                        {items.map(({id, type, amount, currency}) => {
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