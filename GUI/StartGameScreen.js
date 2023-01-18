import { TextInput, View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = (props) => {
    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} 
                       maxLength={2}
                       keyboardType="number-pad"
                       autoCorrect={false}
            />
            <PrimaryButton > Reset </PrimaryButton>
            <PrimaryButton style={{marginTop: 5}}> Confirm </PrimaryButton>
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