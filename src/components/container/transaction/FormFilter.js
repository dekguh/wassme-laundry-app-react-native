import { withStyles } from '@ui-kitten/components'
import React from 'react'
import { View, Text } from 'react-native'
import { SelectInput } from '../../input/SelectInput'
import TextInput from '../../input/TextInput'

const listStatus = [
    {
        title: 'all'
    },
    {
        title: 'waiting payment'
    },
    {
        title: 'going pickup'
    },
    {
        title: 'process'
    },
    {
        title: 'on delivery'
    },
    {
        title: 'delivered'
    },
]

const FormFilter = ({ eva, style, searchOrderIdHandle, searchStatusHandle }) => {
    const inputOrderIdChange = val => {
        searchOrderIdHandle(val)
    }

    return (
        <View style={eva.style.wrapper}>
            <View style={{ width: '50%', paddingRight: 8 }}>
                <TextInput
                    label='order id'
                    placeholder='ex: 12345'
                    onChangeText={inputOrderIdChange}
                />
            </View>
            <View style={{ width: '50%', paddingLeft: 8 }}>
                <SelectInput
                    getValue={searchStatusHandle}
                    label='status'
                    listSelect={listStatus}
                />
            </View>
        </View>
    )
}

const ThemedFormFilter = withStyles(FormFilter, (theme) => ({
    wrapper: {
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap'
    }
}))

export default ThemedFormFilter
