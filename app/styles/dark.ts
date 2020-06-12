class Dark implements Colorsheet {

    label: { color: string } = {
        color: "#ffffffff"
    };
    secondaryLabel: { color: string } = {
        color: "#ebebf599"
    };
    tertiaryLabel: { color: string } = {
        color: "#ebebf54c"
    };
    labelContrast: { color: string } = {
        color: "rgba(0,0,0,0.91)"
    };
    secondaryLabelContrast: { color: string } = {
        color: "#3c3c4399"
    };

    tertiaryLabelContrast: { color: string } = {
        color: "#3c3c434c"
    };


    systemBackground: { backgroundColor: string } = {
        backgroundColor: "#000000"
    };

    secondarySystemBackground: { backgroundColor: string } = {
        backgroundColor: "#1c1c1e"
    };

    tabBarBackground: { backgroundColor: string } = {
        backgroundColor: "#2c2c2eff"
    };

    tertiarySystemBackground: { backgroundColor: string } = {
        backgroundColor: "#1c1c1e"
    };
    formTextInputBackground: { backgroundColor: string } = {
        backgroundColor: "#2c2c2eff"
    };

}

export default Dark;
