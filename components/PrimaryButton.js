import { View, Text, Pressable, StyleSheet} from 'react-native' ;

const PrimaryButton = (props) => {

    function pressHandler(){
        console.log("Hurrraaa!!");
    }

    return (
        <View style={styles.btnContainer} android_ripple={ {color: 'dark'} }>
            <Pressable onPress={pressHandler} >
                <Text style={styles.btnText}> {props.children} </Text>
            </Pressable>
    </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    btnContainer:{
       backgroundColor: '#25979c',
       borderRadius: 28,
       paddingVertical: 8,
       paddingHorizontal:16,
       margin: 4
    },
    btnText: {
        color: 'white',
        textAlign: 'center'
    }
})