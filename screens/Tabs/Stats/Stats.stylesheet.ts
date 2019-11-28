import { StyleSheet } from 'react-native';
import { Typography } from 'styles'

const statsStyles = StyleSheet.create({
    Content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
    },
    Header: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Subtitle: {
        fontSize: 16,
        fontWeight: '500',
    },
    Title: {
        ...Typography.h1,
    },
});

export default statsStyles;
