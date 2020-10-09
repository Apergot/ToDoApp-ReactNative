import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

const CustomTextInput = ({content}) => {
    const [value, onChangeText] = React.useState('Placeholder text');
    return (
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={content}
        />
    );
};

const ToDoCreateScreen = () => {
    return (
        <View style={styles.formContainer}>
            <CustomTextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth:100, width:10}}
            onChangeText={text => onChangeText(text)}
            value={'prueba1'}
            />
            <CustomTextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={'prueba2'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        display: "flex",
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default ToDoCreateScreen;