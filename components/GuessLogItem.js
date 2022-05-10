import {View,Text,StyleSheet} from 'react-native'
import colors from '../GlobalColors/colors';

function GuessLogItem({roundNumber,guess}){
    return <View style={styles.listItem}>
        <Text>#{roundNumber}</Text>
        <Text>Opponent's Guess:{guess}</Text>
    </View>
    
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem:{
        borderColor:colors.primary3,
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:colors.accent1,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
    }
})