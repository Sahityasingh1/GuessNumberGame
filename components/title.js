import {Text,StyleSheet} from 'react-native'


function Title({children}){
    return (
<Text style={styles.title}>{children}</Text>
)
}

export default Title;

const styles= StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        borderColor:'white',
        borderWidth:2,
        marginTop:100,
        textAlign:'center',
        padding:12,

    }
})