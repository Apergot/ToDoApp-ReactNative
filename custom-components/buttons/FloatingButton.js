import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const FloatingButton = ({onPress, title}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.floatingButtonContainer}>
            <Text style={styles.floatingButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    floatingButtonContainer: {
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        elevation:90,
        position: "absolute",
        bottom: 25,
        right: 25,
        backgroundColor: "#53abfc",
        height:60,
        width:60,
        borderRadius:50,
        zIndex:3
    },

    floatingButtonText: {
        fontSize:30,
        color:"#ffffff"
    }
});

export default FloatingButton;