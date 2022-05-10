import {Text,View,StyleSheet} from 'react-native'
import colors from '../GlobalColors/colors';

function NumberContainer({children}){
    return(
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>

    )



}

export default NumberContainer;

const styles = StyleSheet.create({
    container:{
        marginTop:30,
        width:'80%',
        marginHorizontal:30,
        borderWidth:4,
        borderColor: colors.accent1,
        padding:24,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'

    },
    numberText:{
        color:colors.accent1,
        fontSize:36,
        fontWeight:'bold'

    }
    
})