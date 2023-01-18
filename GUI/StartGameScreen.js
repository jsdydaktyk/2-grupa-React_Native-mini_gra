import { useState } from 'react';

import { TextInput, View, StyleSheet, Text, Alert} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = (props) => {

    const [enteredNumber, setEnteredNumber] = useState('')

    function confirmHandler(){
       const chosenNumber = parseInt(enteredNumber)

       if (isNaN(chosenNumber) || chosenNumber <= 0){
            
         Alert.alert('Invalid number',
                      'The number must be between 1 and 99',
                    [{
                        text:"Okey", 
                        style:"destructive", 
                        onPress:{resetInputHandler}
                    }]
                      )
            return;
       }
       console.log("VALID number");
      
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    const enterNumberHandler = (xx) => {
        setEnteredNumber(xx) ;
    }

    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} 
                       maxLength={2}
                       keyboardType="number-pad"
                       autoCorrect={false}
                       onChangeText = {enterNumberHandler}
                       value = {enteredNumber}
            />
            <PrimaryButton onPress={resetInputHandler} > Reset </PrimaryButton>
            <PrimaryButton style={{marginTop: 5}}
                            onPress={confirmHandler}
            > Confirm </PrimaryButton>
        </View>
    )
}

export default StartGameScreen ;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 5,
        margin: 4
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "white",
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        marginVertical: 8,
        

    }
})