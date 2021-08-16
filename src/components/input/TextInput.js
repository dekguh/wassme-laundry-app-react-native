import { Input } from '@ui-kitten/components'
import React from 'react'
import { View, Text } from 'react-native'

const TextInput = ({ ...rest }) => {
    return (
        <Input
            {...rest}
        />
    )
}

export default TextInput
