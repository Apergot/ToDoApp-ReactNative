
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import FloatingButton from '../custom-components/buttons/FloatingButton'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.screenContainer}>
            <Text>This is the home screen</Text>
            <FloatingButton
				title="+"
				onPress= {()=> 
					navigation.navigate('Profile')
				}
			/>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex:1,
        padding:16
    }
});

export default HomeScreen;