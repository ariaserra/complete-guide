import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (inputTextGoal) => {
        setEnteredGoal(inputTextGoal);
    };

    return (
        <View style={styles.goalInputContainer} >
            <TextInput
                placeholder={props.placeholder}
                style={styles.goalInputText}
                onChangeText={goalInputHandler}
                value={enteredGoal} />
            <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
        </View>
    );
};

const styles = StyleSheet.create({
    goalInputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    goalInputText: {
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10
    }
});

export default GoalInput;