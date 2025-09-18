import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PremiumComponent from './PremiumComponent'
import PremiumComponenttwo from './PremiumComponenttwo'
import { Images } from '../Assets'

const PremiumPlan = (props) => {
    return (
        <View>
            <PremiumComponenttwo
                status={props?.status}
                description={props?.description}
                lineone={props?.lineone}
                linetwo={props?.linetwo}
                linethree={props?.linethree}
                price={props?.price}
            />
        </View>
    )
}

export default PremiumPlan

const styles = StyleSheet.create({})