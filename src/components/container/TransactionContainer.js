import { Divider, withStyles } from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import TitleScreen from '../reuse/TitleScreen'
import FormFilter from './transaction/FormFilter'
import ListTransaction from './transaction/ListTransaction'

const dataTrans = [
    {
        id: 1,
        orderId: 13948,
        statusPayment: 'waiting payment',
        date: 1629954703,
        totalPayment: 50000
    },
    {
        id: 2,
        orderId: 13994,
        statusPayment: 'going pickup',
        date: 1629954703,
        totalPayment: 35000
    },
    {
        id: 3,
        orderId: 14948,
        statusPayment: 'process',
        date: 1629954703,
        totalPayment: 90000
    }
]

const TransactionContainer = ({ eva, style }) => {
    const [dataTransaction, setDataTransaction] = useState(dataTrans)
    const [search, setSearch] = useState({
        orderId: '',
        statusPayment: ''
    })

    useEffect(() => {
        const dataFilter = dataTrans
        .filter(data => {
            return data.orderId.toString().indexOf(search.orderId?.toString()) > -1
            && data.statusPayment.toLowerCase().indexOf(search.statusPayment.toLowerCase()) > -1
        })
        setDataTransaction(dataFilter)
    }, [search])

    const searchOrderIdHandle = (orderId) => {
        setSearch({
            ...search,
            orderId: orderId
        })
    }

    const searchStatusHandle = (status) => {
        setSearch({
            ...search,
            statusPayment: status == 'all' ? '' : status
        })
    }

    return (
        <ScrollView style={eva.style.container}>
            <TitleScreen title='Transaction' />
            <Divider style={{ marginBottom: 25 }} />

            <FormFilter
                searchOrderIdHandle={searchOrderIdHandle}
                searchStatusHandle={searchStatusHandle}
            />

            <ListTransaction
                dataTransaction={dataTransaction}
            />
        </ScrollView>
    )
}

const ThemedTransactionContainer = withStyles(TransactionContainer, (theme) => ({
    container: {
        padding: 20,
        minHeight: '100%',
        backgroundColor: '#FFFFFF'
    }
}))

export default ThemedTransactionContainer
