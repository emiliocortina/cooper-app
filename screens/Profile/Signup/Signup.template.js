import React, {Fragment} from "react";
import {ScrollView, Button, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView} from "react-native";
import signupStyles from "./Signup.stylesheet";
import i18n from "../../../i18n";
import {Formik} from 'formik';
import {CheckBox} from 'react-native-elements';
import {Feather} from "@expo/vector-icons";
import SignupModel from './Signup.model';
import useColorsSheet from "../../../services/useColorsSheet.service";
import * as yup from "yup";

const IconComponent = Feather;
const model = new SignupModel();


const schema = yup.object().shape({
    nickName: yup
        .string()
        .required(),
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .min(6)
        .required(),
    passwordRepeat: yup
        .string()
        .min(6)
        .required()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    older: yup
        .boolean()
        .oneOf([true], 'You have to be older than 13'),
    terms: yup
        .boolean()
        .oneOf([true], 'Please check the agreement')
});


const SignupTemplate = ({navigation}) => {

    let Colors = useColorsSheet();

    return (
        <View style={signupStyles.Container}>

            <View style={[signupStyles.Header, Colors.systemBackground]}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={[signupStyles.Close, Colors.systemBackground]}>
                        <IconComponent
                            name={"chevron-left"}
                            size={30}
                            color="#DE6176"
                        />
                    </View>
                </TouchableOpacity>
                <Text style={[signupStyles.Title]}>
                    {i18n.t("screens.signup.title")}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={[signupStyles.Close, Colors.systemBackground]}>
                        <IconComponent
                            name={"x"}
                            size={30}
                            color="#DE6176"
                        />
                    </View>
                </TouchableOpacity>
            </View>

            <ScrollView style={[{width: '100%'}, Colors.systemBackground]}>
                <KeyboardAvoidingView behavior="padding" style={signupStyles.Content}>
                    <View style={signupStyles.Form}>
                        <Formik
                            initialValues={{
                                nickName: '',
                                email: '',
                                password: '',
                                passwordRepeat: '',
                                older: false,
                                terms: false
                            }}
                            onSubmit={values => model.signup(values, navigation)}
                            validationSchema={schema}
                        >
                            {({values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit, setFieldValue}) => (
                                <Fragment>

                                    <View style={signupStyles.FormGroup}>
                                        <TextInput
                                            value={values.nickName}
                                            onChangeText={handleChange('nickName')}
                                            onBlur={() => setFieldTouched('nickName')}
                                            placeholder="Nickname"
                                            placeholderTextColor={Colors.tertiaryLabel.color}
                                            textContentType={'username'}
                                            style={[signupStyles.FormTextInput, Colors.formTextInputBackground,
                                                Colors.secondaryLabel]}
                                        />
                                        {touched.nickName && errors.nickName &&
                                        <View style={signupStyles.ErrorPanel}>
                                            <Text style={signupStyles.ErrorMessage}>{errors.nickName}</Text>
                                        </View>
                                        }
                                    </View>

                                    <View style={signupStyles.FormGroup}>
                                        <TextInput
                                            value={values.email}
                                            onChangeText={handleChange('email')}
                                            onBlur={() => setFieldTouched('email')}
                                            placeholder="E-mail"
                                            placeholderTextColor={Colors.tertiaryLabel.color}
                                            textContentType={'username'}
                                            style={[signupStyles.FormTextInput, Colors.formTextInputBackground,
                                                Colors.secondaryLabel]}
                                        />
                                        {touched.email && errors.email &&
                                        <View style={signupStyles.ErrorPanel}>
                                            <Text style={signupStyles.ErrorMessage}>{errors.email}</Text>
                                        </View>
                                        }
                                    </View>

                                    <View style={signupStyles.FormGroup}>
                                        <TextInput
                                            value={values.password}
                                            onChangeText={handleChange('password')}
                                            placeholder="Password"
                                            placeholderTextColor={Colors.tertiaryLabel.color}
                                            onBlur={() => setFieldTouched('password')}
                                            secureTextEntry={true}
                                            textContentType={'password'}
                                            style={[signupStyles.FormTextInput,
                                                Colors.formTextInputBackground, Colors.secondaryLabel]}
                                        />
                                        {touched.password && errors.password &&
                                        <View style={signupStyles.ErrorPanel}>
                                            <Text style={signupStyles.ErrorMessage}>{errors.password}</Text>
                                        </View>
                                        }
                                    </View>

                                    <View style={signupStyles.FormGroup}>
                                        <TextInput
                                            value={values.passwordRepeat}
                                            onChangeText={handleChange('passwordRepeat')}
                                            placeholder="Repeat Password"
                                            placeholderTextColor={Colors.tertiaryLabel.color}
                                            onBlur={() => setFieldTouched('passwordRepeat')}
                                            secureTextEntry={true}
                                            textContentType={'password'}
                                            style={[signupStyles.FormTextInput,
                                                Colors.formTextInputBackground, Colors.secondaryLabel]}
                                        />
                                        {touched.passwordRepeat && errors.passwordRepeat &&
                                        <View style={signupStyles.ErrorPanel}>
                                            <Text style={signupStyles.ErrorMessage}>{errors.passwordRepeat}</Text>
                                        </View>
                                        }
                                    </View>

                                    <View style={{marginBottom: 5}}>
                                        <CheckBox
                                            containerStyle={signupStyles.Checkbox}
                                            textStyle={Colors.secondaryLabel}
                                            checkedIcon='check-circle'
                                            checkedColor="#DE6176"
                                            iconType='feather'
                                            uncheckedIcon='circle'
                                            title='Older than 13'
                                            checked={values.older}
                                            onPress={() => setFieldValue('older', !values.older)}
                                        />
                                        {touched.older && errors.older &&
                                        <View style={signupStyles.ErrorPanel}>
                                            <Text style={signupStyles.ErrorMessage}>{errors.older}</Text>
                                        </View>
                                        }
                                    </View>

                                    <View style={{marginBottom: 15}}>
                                        <CheckBox
                                            containerStyle={signupStyles.Checkbox}
                                            textStyle={Colors.secondaryLabel}
                                            checkedIcon='check-circle'
                                            checkedColor="#DE6176"
                                            iconType='feather'
                                            uncheckedIcon='circle'
                                            title='Agree to terms and conditions'
                                            checked={values.terms}
                                            onPress={() => setFieldValue('terms', !values.terms)}
                                        />
                                        {touched.terms && errors.terms &&
                                        <View style={signupStyles.ErrorPanel}>
                                            <Text style={signupStyles.ErrorMessage}>{errors.terms}</Text>
                                        </View>
                                        }
                                    </View>

                                    <Button
                                        title='Register'
                                        disabled={!isValid}
                                        onPress={handleSubmit}
                                        color="#DE6176"
                                    />
                                </Fragment>
                            )}
                        </Formik>
                    </View>
                    <Text
                        style={[signupStyles.Link, Colors.secondaryLabel]}
                        onPress={() => {
                            navigation.navigate("Login");
                        }}
                    >
                        {i18n.t("screens.signup.messageLogin")}
                    </Text>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>

    );
}

SignupTemplate.navigationOptions = {
    title: "SignupPage",
    tabBarVisible: false
};

export default SignupTemplate;
