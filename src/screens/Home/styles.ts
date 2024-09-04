import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoContainer:{
        flexDirection: 'column',
        backgroundColor: '#4D4D4D',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 60,
        paddingVertical:20,
    },

    inputContainer:{
        width:'80%',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

export default styles;