import React, {Fragment} from "react";
import {
    Button,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    TextInput,
    KeyboardAvoidingView,
    StatusBar
} from "react-native";
import loginStyles from "./Login.stylesheet";
import i18n from "../../../i18n";
import {Feather} from "@expo/vector-icons";
import LoginModel from "./Login.model";
import {Dark, Light} from "cooper/styles";
import NavigationService from "../../../services/navigation.service";
import * as yup from 'yup';
import {Formik} from 'formik';
import {useColorScheme} from "react-native-appearance/src/index";

const IconComponent = Feather;
const model = new LoginModel();
const nav = new NavigationService();


const LoginTemplate = function (props) {


    const goHome = () => {
        nav.goHome(props);
    };

    let colorScheme = useColorScheme();
    let Colors = Light;
    if (colorScheme === "dark") {
        Colors = Dark;// render some dark thing
    }

    return (
        <ImageBackground
            source={require("cooper/assets/images/login.jpg")}
            style={loginStyles.Container}
        >
            <StatusBar barStyle="light-content" />
            <View style={loginStyles.Header}>
                <TouchableOpacity onPress={goHome}>
                    <View style={[loginStyles.Close, Colors.systemBackground]}>
                        <IconComponent
                            name={"chevron-down"}
                            size={30}
                            color="#DE6176"
                        />
                    </View>
                </TouchableOpacity>
            </View>

            <KeyboardAvoidingView behavior="padding" style={[loginStyles.LoginCard, Colors.systemBackground]}>
                <Image style={loginStyles.Title}
                       resizeMode="contain"
                       source={require("cooper/assets/images/logo_text.png")}>
                </Image>
                <View style={loginStyles.Form}>
                    <Formik
                        initialValues={{email: '', password: ''}}
                        onSubmit={values => model.login(values, props)}
                        validationSchema={yup.object().shape({
                            email: yup
                                .string()
                                .email()
                                .required(),
                            password: yup
                                .string()
                                .min(6)
                                .required(),
                        })}
                    >
                        {({values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit}) => (
                            <Fragment>
                                <View style={loginStyles.FormGroup}>
                                    <TextInput
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                        onBlur={() => setFieldTouched('email')}
                                        placeholder="E-mail"
                                        placeholderTextColor={Colors.tertiaryLabel.color}
                                        textContentType={'username'}
                                        style={[loginStyles.FormTextInput, Colors.formTextInputBackground,
                                            Colors.secondaryLabel]}
                                    />
                                    {touched.email && errors.email &&
                                    <View style={loginStyles.ErrorPanel}>
                                        <Text style={loginStyles.ErrorMessage}>{errors.email}</Text>
                                    </View>
                                    }
                                </View>

                                <View style={loginStyles.FormGroup}>
                                    <TextInput
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        placeholder="Password"
                                        placeholderTextColor={Colors.tertiaryLabel.color}
                                        onBlur={() => setFieldTouched('password')}
                                        secureTextEntry={true}
                                        textContentType={'password'}
                                        style={[loginStyles.FormTextInput,
                                            Colors.formTextInputBackground, Colors.secondaryLabel]}
                                    />
                                    {touched.password && errors.password &&
                                    <View style={loginStyles.ErrorPanel}>
                                        <Text style={loginStyles.ErrorMessage}>{errors.password}</Text>
                                    </View>
                                    }
                                </View>
                                <Button
                                    title='Log In'
                                    disabled={!isValid}
                                    onPress={handleSubmit}
                                    color="#DE6176"
                                />
                            </Fragment>
                        )}
                    </Formik>


                </View>

                <Text
                    style={[loginStyles.Link, Colors.secondaryLabel]}
                    onPress={() => {
                        props.navigation.navigate("SignupPage");
                    }}
                >
                    {i18n.t("screens.login.messageSignup")}
                </Text>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

LoginTemplate.navigationOptions = {
    title: "LoginPage",
    tabBarVisible: false
};

export default LoginTemplate;
