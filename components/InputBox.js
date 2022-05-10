import {View,StyleSheet} from 'react-native'
import colors from '../GlobalColors/colors';

function InputBox({children}){
    return(
    <View style={styles.inputContainer}>
    {children}
    </View>
    )

}

export default InputBox;

const styles= StyleSheet.create({
    inputContainer:{
        marginTop:36,
        marginHorizontal:24,
        padding:16,
        backgroundColor:colors.primary4,
        borderRadius:8,
        elevation:4,
        alignItems:'center',
        justifyContent:'center'


    },
})