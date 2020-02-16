import { StyleSheet } from 'react-native';

const statsDetailsStyles = StyleSheet.create({
    Content: {
        width: '100%',
        paddingTop: 30,
        paddingHorizontal: 10,
        paddingBottom: 70,
    },
    Columns: {
        width: '100%',
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "row",
    },
    ColumnLeft: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        paddingRight: 5,
    },
    ColumnCenter: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        paddingHorizontal: 5,
    },
    ColumnRight: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        paddingLeft: 5,
    },
    Card: {
        backgroundColor: 'white',
        borderRadius: 30,
        width: '100%',
        marginBottom: 20,
        shadowColor: "rgba(58,55,55,0.31)",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 3,
    },
    Graph: {
        backgroundColor: 'white',
        borderRadius: 30,
        width: '100%',
        marginBottom: 20,
        shadowColor: "rgba(58,55,55,0.31)",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 3,
        aspectRatio: 16/9,
    }
});

export default statsDetailsStyles;
