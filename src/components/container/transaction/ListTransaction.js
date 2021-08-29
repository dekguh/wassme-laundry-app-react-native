import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import CardTransaction from '../../CardTransaction'

const ListTransaction = ({ dataTransaction }) => {
    const [listTransaction, setListTransaction] = useState(dataTransaction)
    return (
        <View>
            {listTransaction && listTransaction.map(data => (
                <CardTransaction
                    key={data.id}
                    totalPayment={data.totalPayment}
                    orderId={data.orderId}
                    status={data.statusPayment}
                    date={data.date}
                    style={{ marginBottom: 15 }}
                />
            ))}
        </View>
    )
}

export default ListTransaction
