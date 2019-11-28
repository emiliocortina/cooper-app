import {useColorScheme} from "react-native-appearance/src/index";
import { Dark, Light } from "cooper/styles";

// This is a hook
function useColorsSheet()  {
    let colorScheme = useColorScheme();
    let Colors = Light;
    if (colorScheme === "dark") {
        Colors = Dark;// render some dark thing
    }
    return Colors;
}

export default useColorsSheet;
