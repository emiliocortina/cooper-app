import {StyleSheet} from 'react-native';
import {Buttons, Typography, Colors} from 'styles'

const signupStyles = StyleSheet.create({
    Container: {
        width: '100%',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    Content: {
        flex: 4,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: '100%',
        marginTop: 30,
    },
    Form: {
        width: '65%',
        paddingBottom: 20
    },
    FormGroup: {
        marginBottom: 25,
    },
    FormTextInput: {
        backgroundColor: 'white',
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 100,
        shadowColor: "rgba(58,55,55,0.14)",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 3,
    },
    ErrorPanel: {
        padding: 5,
        marginTop: 10,
        borderRadius: 20,
    },
    ErrorMessage: {
        fontSize: 12,
        color: '#DE6176',
        textAlign: 'center',
    },
    SubmitButton: {
        backgroundColor: "pink",
        fontWeight: "bold",
        padding: 10,
        color: "white"
    },
    Link: {
        color: "#3c3c4399",
        textDecorationLine: "underline",
        marginBottom: 30
    },
    Title: {
        ...Typography.h2,
        paddingVertical: 20,
        color: "#DE6176",
    },
    Header: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    Close: {
        borderRadius: 20,
        height: 40,
        aspectRatio: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
    },
    Checkbox: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },
    Footer: {
        width: '100%',
        marginTop: 20,
        marginBottom: 50,
        paddingLeft: 20,
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
    }
});
export default signupStyles;
