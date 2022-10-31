import { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, Modal, Button, Pressable } from "react-native";

export default function Card( { doc } ) {
    let uri = doc && doc.urls.regular || "http://shortify.up.railway.app/di1374c";
    const [ preview, setPreview ] = useState( false );

    const openImagePreview = () => {
        setPreview( true );
    }
    const closePreview = () => {
        setPreview( false );
    }
    return (
        <>
            <View>
                <Modal animationType="slide" visible={preview} transparent={true} onRequestClose={closePreview} statusBarTranslucent={false}>
                    <TouchableOpacity style={Styles.previewCard} >
                        <Image source={{ uri: doc.urls.regular }} style={Styles.previewImage} resizeMode="contain" />
                        <Pressable android_ripple="10" style={Styles.closeButton} onPress={closePreview}><Text style={Styles.text}>close</Text></Pressable>
                    </TouchableOpacity>
                </Modal>
            </View>
            <TouchableOpacity style={Styles.card} onPress={openImagePreview}>
                <Image source={{
                    uri: uri
                }} style={Styles.image} resizeMode="cover" />
            </TouchableOpacity>
        </>
    );
}

const Styles = StyleSheet.create( {
    card: {
        backgroundColor: "#292929",
        // padding: 8,
        margin: 6,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 3,
        elevation: 3,
        width: 180,
        maxHeight: "auto"
    },
    image: {
        backgroundColor: "#292929fa",
        borderRadius: 0,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        width: "100%",
        height: 140
    },
    text: {
        fontSize: 16,
        fontWeight: "600",
        padding: 4,
        color: "#f2f2f2"
    },
    desc: {
        fontSize: 14,
        color: "#586f7c",
        padding: 4,
        paddingTop: 2,
    },
    previewCard: {
        backgroundColor: "#2929297a",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    previewImage: {
        backgroundColor: "#292929ca",
        height: 220,
        width: 360,
        borderRadius: 8,
        padding: 4,
        margin: 4,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        }
    },
    closeButton: {
        backgroundColor: "#292929",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4
    }
} )