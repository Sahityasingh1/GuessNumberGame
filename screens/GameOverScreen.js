import {View,Image,StyleSheet,Text} from 'react-native';
import Title from '../components/title';
import colors from '../GlobalColors/colors';
import PrimaryButton from '../components/PrimaryButton';

function GameOverScreen({roundsNumber,userNumber,onStartNewGame}){
    return <View style={styles.rootContainer}>
    <Title>
        Game Over
    </Title>
    <View style={styles.imageContainer}>
    <Image style={styles.image}  source={require('../assets/images/over.jpg')} />
    </View>
    <View>
        <Text style={styles.summaryText}>Your phone needed<Text style={styles.highlight}> {roundsNumber} </Text>
         rounds to guess the number <Text style={styles.highlight}>{userNumber}.</Text></Text>
    </View>
    <PrimaryButton onpressed={onStartNewGame}>Start New Game</PrimaryButton>

    </View>

}

export default GameOverScreen;

const styles= StyleSheet.create({
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center'

    },

    imageContainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:colors.primary4,
        overflow:'hidden',
        margin:36,
       

    },
    image:{
        width:'100%',
        height:'100%'
    },
    summaryText:{
       
        fontSize:24,
        textAlign:'center',
        marginBottom:24,

    },
    highlight:{
        
        color:colors.primary1,
        fontSize:26
    }

})