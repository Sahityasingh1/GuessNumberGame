import {View,Text,Pressable,StyleSheet} from 'react-native';
import colors from '../GlobalColors/colors';



function PrimaryButton({children,onpressed}){
    
return(
    <View style={styles.buttonOuterContainer}>
    <Pressable style={styles.buttonInnerContainer} onPress={onpressed} android_ripple={{color:'#640233'}}>
        <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
    </View>
)
}
export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden'
    },
    buttonInnerContainer:{
        backgroundColor:colors.primary3,
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2,
    },
    buttonText:{
        color:'white',
        textAlign:'center',

    }
   
})