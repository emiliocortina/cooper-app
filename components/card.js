import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
//import {BlurView} from '@react-native-community/blur';

const Card = props => (
  <View style={styles.Container}>
    <View style={styles.Cover}>
      <Image
        style={styles.Image}
        source={require('../assets/images/sentinel2.jpg')}
      />
      <Text>Temperatures</Text>
    </View>
    <View style={styles.Content}>
      <View style={styles.Wrapper}>
        <Text style={styles.Title}>Frascati Temperatures</Text>
        <Text style={styles.Subtitle}>
          High Temperatures around romemda dkasmdals
        </Text>
      </View>
    </View>
  </View>
);

export default Card;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#ffffff',
    width: 315,
    height: 280,
    borderRadius: 14,
    marginVertical: 20,
    marginHorizontal: 10,
    shadowColor: 'rgba(58,55,55,0.1)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10,
  },
  Cover: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    overflow: 'hidden',
  },
  Image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  Title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    width: 170,
  },
  Content: {
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
  },
  Logo: {
    width: 44,
    height: 44,
  },
  Caption: {
    color: '#3c4560',
    fontSize: 20,
    fontWeight: '600',
  },
  Subtitle: {
    color: '#b8bece',
    fontWeight: '600',
    fontSize: 15,
    textTransform: 'uppercase',
    marginTop: 4,
  },
  Wrapper: {
    marginLeft: 10,
  },
});
/*


const Subtitle = styled.Text`

`;

const Wrapper = styled.View`

`;


const Cover = styled.View`

`;

const Image = styled.Image`

`;

const Title = styled.Text`

`;
*/
