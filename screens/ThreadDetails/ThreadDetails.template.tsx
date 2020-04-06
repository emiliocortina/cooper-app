import React from 'react';
import { View, ScrollView, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import useColorsSheet from "../../services/useColorsSheet.service";

const HEADER_HEIGHT = 64;


const ThreadDetailsTemplate: React.FC<any> = ({ navigation }) => {

    let Colors = useColorsSheet();
    const styles = StyleSheet.create({
        container: {
            ...Colors.systemBackground,
            flex: 1,
        },
        contentContainer: {
            flexGrow: 1,
        },
        navBar: {
            height: '100%',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: 'transparent',
        },
        titleStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
        },
    });

    const renderContent = () => (
        <ScrollView style={Colors.systemBackground}>
            <Text style={Colors.label}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quam sequi accusamus dolorum veniam, id
                nisi quasi. Hic incidunt perferendis quod quia labore ipsum, iure exercitationem et quae sit vel
                reiciendis pariatur mollitia reprehenderit adipisci ratione alias dignissimos laborum, molestias
                eligendi expedita earum ex? Ipsum eum officiis, quaerat non recusandae quo corporis, asperiores rem
                quibusdam unde nam omnis explicabo soluta voluptate nesciunt amet optio at a eius sint, neque error
                beatae incidunt? Assumenda veritatis ut provident quibusdam voluptates totam nam necessitatibus dicta
                dolorum ea enim labore iusto, voluptatum pariatur tempora? Assumenda optio, quae deserunt similique,
                harum est quibusdam sequi, placeat porro soluta delectus veniam eligendi laudantium rem fuga magni.
                Veniam delectus animi accusantium debitis nobis voluptate, ex iste sit saepe sunt omnis pariatur
                quibusdam in cumque odit quasi architecto quis dolorum recusandae. Neque alias fugit delectus.
                Repellendus voluptas fugit quae minus nostrum sit iure natus temporibus reiciendis, aut similique rem
                eos eveniet! Tempora tempore, odit tenetur, blanditiis perspiciatis accusantium accusamus alias, iste
                omnis quis aliquam ab! Quis unde aperiam voluptatum, sunt, quam delectus eius fuga aliquid soluta
                voluptas nulla quo cupiditate corrupti dicta quas harum maiores animi alias numquam, ab pariatur
                voluptatibus fugit illo? Et officiis, odio nemo autem eum voluptates aperiam quas labore, adipisci
                asperiores nulla modi recusandae repellendus molestias culpa accusamus tempore! Dolore illo optio
                similique. Consequatur quo fugit mollitia culpa laudantium unde perspiciatis odio modi vel tenetur
                explicabo pariatur quae nam iure quos dolore veniam consectetur, error, vitae architecto. Dolorem, sit
                accusantium rerum voluptatum aspernatur ab incidunt magnam, corporis pariatur veniam quidem. Iure, omnis
                id, natus esse excepturi consectetur rem quae, aliquid quos placeat sapiente dolores asperiores tempora
                odit! Enim asperiores explicabo beatae nesciunt quis animi iste commodi earum corrupti a? Dolor ipsa qui
                at, corporis explicabo enim? Error optio quibusdam vitae culpa dolores, laborum modi tenetur ab tempora
                fugit. Hic modi dignissimos ipsum ex praesentium. Minima distinctio animi commodi voluptatum odio. Quae
                enim corporis magnam assumenda reiciendis consectetur similique eaque est amet dicta rem et cum, ad
                aliquam suscipit architecto veritatis excepturi at! Ab, totam? Asperiores laudantium quos at hic
                aperiam, dignissimos perferendis incidunt eum aliquam voluptas explicabo cum voluptate, perspiciatis non
                deleniti itaque in sequi soluta maxime quisquam officiis, consectetur rem. Fuga fugiat dolor voluptas
                beatae nostrum perspiciatis esse distinctio, autem nihil similique asperiores, amet aperiam nemo
                veritatis delectus deleniti blanditiis repellendus. A ducimus quaerat excepturi magnam eius nulla
                nesciunt nihil nostrum animi obcaecati iste consequatur modi labore sint quidem, et molestiae? Qui at
                amet praesentium. Aut harum facere sint quasi expedita assumenda quia, officiis blanditiis delectus
                molestiae dolorem similique adipisci iste architecto vero aperiam rem enim! Magnam modi ducimus aliquid
                minima! Dolor cumque iure, facilis reiciendis aut natus mollitia, aspernatur, omnis dignissimos rerum
                nihil.
            </Text>
        </ScrollView>
    );

    const renderNavBar = () => (
        <View style={styles.navBar}>
            <TouchableOpacity onPress={() => {
            }}>
                <Feather name="heart" size={25} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.titleStyle}>Title</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Feather name="x" size={25} color="#fff" />
            </TouchableOpacity>
        </View>
    )

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <ReactNativeParallaxHeader
                headerMinHeight={HEADER_HEIGHT}
                headerMaxHeight={250}
                extraScrollHeight={20}
                navbarColor={Colors.systemBackground.backgroundColor}
                backgroundImage={images.background}
                backgroundImageScale={1.2}
                renderNavBar={renderNavBar}
                renderContent={renderContent}
                containerStyle={styles.container}
                contentContainerStyle={styles.contentContainer}
                innerContainerStyle={styles.container}
            />
        </View>
    );

}


const images = {
    background: require('cooper-app/assets/images/sentinel3.jpg'), // Put your own image here
};

export default ThreadDetailsTemplate;
