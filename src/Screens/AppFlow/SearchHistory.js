import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HistorySearchBar from '../../Components/HistorySearchBar'
import SearchHistoryBody from '../../Components/SearchHistoryBody'
import MainHeader from '../../Components/MainHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MyStyling } from '../../Constants/Styling'

const SearchHistory = () => {
    return (
        <SafeAreaView style={MyStyling.container}>
            <MainHeader />
            <HistorySearchBar />
            <SearchHistoryBody />
        </SafeAreaView>
    )
}

export default SearchHistory

const styles = StyleSheet.create({})