import {StyleSheet} from "react-native";
import {Typography} from "styles";

const loginStyles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    Header: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    Close: {
        borderRadius: 20,
        height: 40,
        aspectRatio: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    LoginCard: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: 30,
        width: "80%",
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    Title: {
        height: 26,
        padding: 20,
        marginBottom: 16,
    },
    Form: {
        width: "85%",
        paddingVertical: 10
    },
    FormGroup: {
        marginBottom: 25,
    },
    FormTextInput: {
        backgroundColor: 'white',
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 100,
        shadowColor: "rgba(58,55,55,0.19)",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 8,
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
});
export default loginStyles;
