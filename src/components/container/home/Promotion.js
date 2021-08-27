import React from 'react'
import { View, Text } from 'react-native'
import CardPromo from '../../CardPromo'

const Promotion = () => {
    return (
        <CardPromo
            title='Get Special Discounts Up To 30k'
            code='30K0FFPRICE'
            dateExpired={1632153600}
        />
    )
}

export default Promotion
