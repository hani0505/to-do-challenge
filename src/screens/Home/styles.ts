import { Button, StyleSheet } from "react-native";
import Theme from "../../stylesGlobal/Theme";

export const styles = StyleSheet.create({
    container: {
        // height: '100%',
        backgroundColor: Theme.colors.Gray700,
        flex: 1,
        paddingTop: 80,
        alignItems: 'center'
    }, 
    textuple:{
        color: Theme.colors.Purple,
        fontWeight: 'bold'

    },
    textBlue:{
        color: Theme.colors.Blue,
        fontWeight: 'bold',
        

    },
    logo: {
        width: 110,
        height: 32
    },
    wrapper:{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: Theme.colors.Gray600,
        height: '80%',
        padding: 24,
        flex: 0.8
    },
    inputContainer:{
        flexDirection: 'row',
        marginTop: -56,
        marginBottom: 32,
        width: '100%'

    },
    input:{
        height: 56,
        width: 16,
        borderRadius: 5,
        flex: 1,
        marginBottom: 8,
        color: Theme.colors.Gray100,
        backgroundColor: Theme.colors.Gray500
    },
    button:{
        width: 56,
        height:56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: Theme.colors.BlueDark,
        marginLeft: 3
    },
    buttonIco:{
        height:16,
        width: 16
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20
    },
    headerItem:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    counter: {
        marginLeft: 8,
        borderRadius: 16,
        paddingVertical: 2,
        paddingHorizontal: 12,
        backgroundColor: Theme.colors.Gray400,
        color: Theme.colors.Gray100
    }

})