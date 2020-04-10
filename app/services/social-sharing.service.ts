import { Linking, CameraRoll, Image } from "react-native";
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Asset } from "expo-asset";
import * as Sharing from 'expo-sharing';


export const shareToInstagramStories = async () => {
    /*
     Tenemos Asset.fromURI, q si en su momento ya descargamos y metimos en FileSystem (buscar expo filesystem) o cache la imagen
     conservando la uri deberiamos de poder recuperar el asset sin tener q hacer el require
     Mirar https://docs.expo.io/versions/latest/guides/preloading-and-caching-assets/
     https://docs.expo.io/versions/latest/sdk/filesystem/#filesystemdownloadasyncuri-fileuri-options
     https://docs.expo.io/versions/latest/sdk/media-library/#asset
    */
    await getPermissionAsync();

    // Obtener la url local del asset
    const image = require('cooper-app/assets/images/no2.jpg');
    let imageAsset = await Asset.fromModule(image);
    if (!imageAsset.localUri) {
        await Asset.loadAsync(require('cooper-app/assets/images/no2.jpg')).then(() => { imageAsset = Asset.fromModule(image); });
    }
    // Guardar la imagen en la galeria, i no cutre af :(
    // Crear un album cooper climate para guardarlas todas
    await MediaLibrary.saveToLibraryAsync(imageAsset.localUri);
    let instagramURL = `instagram://library?AssetPath=null`;
    Linking.openURL(instagramURL);
}

// https://docs.expo.io/versions/latest/tutorial/sharing/
export const shareGeneric = async () => {
    // Obtener la url local del asset
    const image = require('cooper-app/assets/images/no2.jpg');
    let imageAsset = await Asset.fromModule(image);
    if (!imageAsset.localUri) {
        await Asset.loadAsync(require('cooper-app/assets/images/no2.jpg')).then(() => { imageAsset = Asset.fromModule(image); });
    }
    imageAsset.name = 'coopersitaa';
    // Guardar la imagen en la galeria, i no cutre af :(
    Sharing.shareAsync(imageAsset.localUri);
}

const getLocalURI = (uri: string) => {

}

const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
        }
    }
}
