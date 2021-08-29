import { Spinner } from '@ui-kitten/components'
import React from 'react'
import { View, Text } from 'react-native'
import CardTransaction from '../../CardTransaction'

const ListTransaction = ({ dataTransaction }) => {
    return (
        <View>
            {dataTransaction?.length > 0
            ? dataTransaction.map(data => (
                <CardTransaction
                    key={data.id}
                    totalPayment={data.totalPayment}
                    orderId={data.orderId}
                    status={data.statusPayment}
                    date={data.date}
                    style={{ marginBottom: 15 }}
                />
            ))
            : (
                <View>
                    <View style={{ marginLeft: 'auto', marginRight: 'auto', width: 20, marginTop: 60 }}>
                        <Spinner size='small' />
                    </View>
                    <Text style={{ textAlign: 'center', marginTop: 8 }}>no transaction found</Text>
                </View>
            )}
        </View>
    )
}

export default ListTransaction
