import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Tab, Tabs, ScrollableTab } from 'native-base'

import { Head } from '../components/common'
import { Home, ThingsToDo } from '../components/views/home'

class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    _renderTabs = () => {
        return <Home />
    }

    render() {
        return (
            <Container>
                <Head tabs={this._renderTabs()} />
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

export { HomeScreen }
