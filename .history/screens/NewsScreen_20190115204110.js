import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Container, Tab, Tabs, ScrollableTab, Text } from 'native-base'

import { IOSHeader } from '../components/common'
import { News } from '../components/views/news'

const categories = [
    { id: 1, category: 'Breaking' },
    { id: 2, category: 'Sports' },
    { id: 3, category: 'Technology' },
]

class NewsScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    _renderTabs = () => {
        const categoryTabs = categories.map(value => {
            return (
                <Tab
                    key={value.id}
                    tabStyle={styles.tab}
                    activeTabStyle={styles.activeTab}
                    activeTextStyle={styles.activeText}
                    heading={value.month}
                >
                    <News category={value} go={this._handleNavigation} />
                </Tab>
            )
        })
        return (
            <Tabs
                renderTabBar={() => <ScrollableTab />}
                locked={true}
                tabBarUnderlineStyle={styles.tabBar}
                tabBarUnderlineStyle={styles.removeUnderline}
                style={{
                    elevation: 0,
                    shadowColor: 'transparent',
                    shadowOffset: null,
                    shadowRadius: null,
                    shadowOpacity: null,
                }}
            >
                {categoryTabs}
            </Tabs>
        )
    }

    _handleNavigation = (value, data) => {
        this.props.navigation.navigate(value, { ...data })
    }

    render() {
        return (
            <Container>
                <IOSHeader
                    title="News"
                    tabs={this._renderTabs()}
                    go={this.props.navigation}
                    placeholder="Search News..."
                    hasSearch
                />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    tabBar: {
        borderBottomWidth: 0,
        opacity: 0,
    },
    tab: {
        borderBottomWidth: 0,
        backgroundColor: '#fff',
        padding: 0,
        margin: 0,
        height: 10,
    },
    activeTab: {
        borderBottomWidth: 0,
        borderRadius: 20,
        padding: 0,
        margin: 0,
        height: 10,
    },
    activeText: {
        color: '#1f2123',
    },
    removeUnderline: {
        backgroundColor: '#fff',
        borderBottomWidth: 0,
    },
})

export { NewsScreen }
