import { Layout, Text, withStyles } from '@ui-kitten/components'
import React from 'react'
import { View} from 'react-native'
import CardService from '../../CardService'

const Services = ({ eva, style }) => {
    return (
        <Layout>
            <Text style={eva.style.title} category='h5'>Services</Text>
            <Layout style={{ ...eva.style.listWrap, marginBottom: 15 }}>
                <Layout style={{
                    ...eva.style.listItem,
                    paddingRight: 8
                }}>
                    <CardService
                        title='Washing'
                        source={require('../../../../images/icon-service/2-washing-machine_64.png')}
                    />
                </Layout>

                <Layout style={{
                    ...eva.style.listItem,
                    paddingLeft: 8
                }}>
                    <CardService
                        title='Ironing'
                        source={require('../../../../images/icon-service/4-iron-table_64.png')}
                    />
                </Layout>
            </Layout>

            <Layout style={{ ...eva.style.listWrap, marginBottom: 15 }}>
                <Layout style={{
                    ...eva.style.listItem,
                    paddingRight: 8
                }}>
                    <CardService
                        title='Dryining'
                        source={require('../../../../images/icon-service/8-pants_64.png')}
                    />
                </Layout>

                <Layout style={{
                    ...eva.style.listItem,
                    paddingLeft: 8
                }}>
                    <CardService
                        title='Clean Stains'
                        source={require('../../../../images/icon-service/10-shirt_64.png')}
                    />
                </Layout>
            </Layout>
        </Layout>
    )
}

const ThemedServices = withStyles(Services, (theme) => ({
    title: {
        fontWeight: 'bold',
        color: theme['color-heading'],
        marginBottom: 15
    },
    listWrap: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    listItem: {
        flex: 1,
        flexShrink: 0,
        flexBasis: '50%'
    }
}))

export default ThemedServices
