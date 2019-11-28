import {useColorScheme} from "react-native-appearance/src/index";
import { Dark, Light } from "cooper-app/styles";

const lightTheme = new Light();
const darkTheme = new Dark();

// This is a hook
function useColorsSheet(): Colorsheet  {
    let colorScheme = useColorScheme();
    if (colorScheme === "dark") {
        return darkTheme;
    }
    return lightTheme;
}

export default useColorsSheet;
