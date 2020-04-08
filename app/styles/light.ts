class Light implements Colorsheet {

    label: { color: string } = {
        color: "rgba(50,53,55,0.92)"
    };
    secondaryLabel: { color: string } = {
        color: "rgba(50,53,55,0.81)"
    };
    tertiaryLabel: { color: string } = {
        color: "#3c3c434c"
    };
    labelContrast: { color: string } = {
        color: "#ffffffff"
    };
    secondaryLabelContrast: { color: string } = {
        color: "#ebebf599"
    };

    tertiaryLabelContrast: { color: string } = {
        color: "#ebebf54c"
    };

    systemBackground: { backgroundColor: string } = {
        backgroundColor: "#ffffffff"
    };

    secondarySystemBackground: { backgroundColor: string } = {
        backgroundColor: "#f2f2f7ff"
    };

    tabBarBackground: { backgroundColor: string } = {
        backgroundColor: "#ffffffff"
    };

    tertiarySystemBackground: { backgroundColor: string } = {
        backgroundColor: "#ffffffff"
    };
    formTextInputBackground: { backgroundColor: string } = {
        backgroundColor: "#ffffffff"
    };

}


export default Light;

