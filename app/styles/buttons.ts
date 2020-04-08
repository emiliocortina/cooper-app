import {StyleSheet} from "react-native";


const small = {
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: 75
};

const rounded = {
    borderRadius: 50
};

const Buttons = StyleSheet.create({

    small: {
        ...small
    },

    rounded: {
        ...rounded
    },

    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
    },

    smallRounded: {
        ...small,
        ...rounded
    }
});

export default Buttons;
