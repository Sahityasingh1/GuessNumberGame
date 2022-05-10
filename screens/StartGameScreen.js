import { useState } from 'react';
import { TextInput, View,StyleSheet,Text} from 'react-native';
import {Alert} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import colors from '../GlobalColors/colors';
import Title from '../components/title';
import InputBox from '../components/InputBox';
function StartGameScreen({onPickNumber}){
    const [enteredNumber,setEnteredNumber] = useState('');
    
    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText)
    }
    function confirmInputHandler(){
        const choosenNumber = parseInt(enteredNumber);
        if(isNaN(choosenNumber)||choosenNumber<=0||choosenNumber>99){
            Alert.alert(
                'Invalid number',
                'Number has to be a number between 1 and 99.'
                ,[{text:'Okay',style:'destructive',
                onPress:resetInputHandler
            }]);
            return;
        
        }
        onPickNumber(choosenNumber);
    }
    function resetInputHandler(){
        setEnteredNumber('')
    }

return(
    <View style={styles.rootContainer}>
    <Title>Guess My Number</Title>
<InputBox>
<Text style={styles.txtHading}>Enter a number</Text>
    <TextInput style={styles.numberInput} 
    onChangeText={numberInputHandler}
    maxLength={2}
    keyboardType="number-pad" 
    autoCapitalize='none' 
    autoCorrect={false}
    value = {enteredNumber}

    />
    <View style={styles.buttonsContainer}>
    <View style={styles.buttonContainer}>
    <PrimaryButton onpressed={resetInputHandler}>Reset</PrimaryButton>
    </View>
    <View style={styles.buttonContainer}>
    <PrimaryButton onpressed={confirmInputHandler}>Confirm</PrimaryButton>
    </View>
    </View>
    </InputBox>
    
</View>
)
}


export default StartGameScreen;

const styles= StyleSheet.create({
    txtHading:{
        color:colors.accent1,
        fontSize:24,
        alignItems:'center',
        justifyContent:'center'
    },
    rootContainer:{
        flex:1,
        marginTop:100,
        alignItems:'center'
    },
    
    numberInput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:colors.accent1,
        borderBottomWidth:2,
        color:colors.accent1,
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center',
    },
    buttonsContainer:{
        flexDirection:'row'

    },
    buttonContainer:{
        flex:1,
    }

})