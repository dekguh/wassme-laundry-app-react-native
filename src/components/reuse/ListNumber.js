import { withStyles, Text, useTheme } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'

const ListItem = ({ style, number, title, description }) => {
    const themed = useTheme()

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            ...style
        }}>
            <View style={{
                flexGrow: 0,
                flexShrink: 1,
            }}>
                <Text category='s2' style={{
                    backgroundColor: themed['color-primary-500'],
                    borderRadius: 4,
                    color: '#FFFFFF',
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 10,
                    paddingRight: 10
                }}>{number}</Text>
            </View>

            <View style={{
                flexGrow: 1,
                flexShrink: 1,
                paddingLeft: 8
            }}>
                <Text style={{
                    color: themed['color-heading'],
                    marginBottom: 4
                }}>{title}</Text>
                <Text category='s2' style={{
                    color: themed['color-body']
                }}>{description}</Text>
            </View>
        </View>
    )
}

const ListNumber = ({ style, dataList }) => {
    return (
        <View style={style}>
        {dataList.map((data, i) => (
            <ListItem
                key={i}
                number={data.number}
                title={data.title}
                description={data.description}
                style={{
                    marginBottom: 15
                }}
            />
        ))}
        </View>
    )
}

const ThemedListNumber = withStyles(ListNumber, (theme) => ({
    listWrap: {

    }
}))

export default ThemedListNumber
