import {Text,View,StyleSheet,Alert,FlatList} from 'react-native'
import { useState , useEffect} from 'react';
import Title from '../components/title';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import InputBox from '../components/InputBox';
import colors from '../GlobalColors/colors';
import GuessLogItem from '../components/GuessLogItem';


function generateRandomBetween(min,max,exclude){
    const rndNum = Math.floor(Math.random()*(max-min))+min;
    if (rndNum===exclude){
        return generateRandomBetween(min,max,exclude);
    } else {
        return rndNum;
    }

}
let minBoundry = 1;
let maxBoundry = 100;


function GameScreen({userNumber,onGameOver}){
    const initialGuess = generateRandomBetween(1,100,userNumber);
    const [currentGuess,setCurrentGuess]= useState(initialGuess);
    const [guessRound,setGuessRound] = useState([initialGuess])

    useEffect(()=>{
        if (currentGuess===userNumber){
            onGameOver(guessRound.length);

        }
    },[currentGuess,userNumber,onGameOver]);

    useEffect(()=>{
        minBoundry = 1;
        maxBoundry = 100;


    },[]);

    function nextGuessHandler(direction){
        if( (direction==='lower'&& currentGuess< userNumber)|| 
        (direction==='greater'&& currentGuess> userNumber)){
            Alert.alert("Don't lie!","You know that is wrong...",
            [{text:'Sorry!',style:'cancel'}])
            return;
        }
        if (direction==='lower'){
            maxBoundry= currentGuess;
        } else{
            minBoundry=currentGuess+1;
        }
        const newRndNumber= generateRandomBetween(minBoundry,maxBoundry,currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRound(prevGuessRound =>[newRndNumber,...prevGuessRound])
    }
     const guessRoundsListLength = guessRound.length;
    return (
    <View style={styles.screen}>
    <Title>Opponent's Guess</Title>
    <NumberContainer>{currentGuess}</NumberContainer>

    <View>
        <InputBox>
        <Text style={styles.txtHading}>Higher or lower?</Text>
        <View style={styles.buttonsContainer}>
    <View style={styles.buttonContainer}>
    <PrimaryButton onpressed={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton>
    </View>
    <View style={styles.buttonContainer}>
    <PrimaryButton onpressed={nextGuessHandler.bind(this,'greater')}>+</PrimaryButton>
    </View>
    </View>
    </InputBox>
    </View>
    <View style={styles.listContainer}>
        <FlatList
            data={guessRound}
                renderItem={(itemData)=><GuessLogItem 
                roundNumber={guessRoundsListLength-itemData.index}
                guess={itemData.item}
                />}
                keyExtractor={(item)=>item}
            />
            </View>
    </View>


    

    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24,
    },
    buttonsContainer:{
        flexDirection:'row'

    },
    buttonContainer:{
        flex:1,
    }, txtHading:{
        color:colors.accent1,
        fontSize:20,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:8,
    },
    listContainer:{
        flex:1,
        padding:16,
    }
 

})