import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const GoalItem = props => {
    return (
        <View style={styles.item}>
            <Text>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({    
  item: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'grey',
    borderWidth: 1
  }
});

export default GoalItem;