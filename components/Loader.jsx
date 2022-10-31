import { View, Text, Modal, StyleSheet, ActivityIndicator } from "react-native";

export default function Loader( { visible } ) {
    return (
        // <View style={styles.modalContainer}>
        <Modal transparent={true} visible={visible} statusBarTranslucent={true} animationType="fade">
            <View style={styles.modalContainer}>
                <View style={styles.popup}>
                    <ActivityIndicator hidesWhenStopped={true} animating={visible} color="#aaa" size="large" />
                    <Text style={styles.text}>Loading</Text>
                </View>
            </View>
        </Modal>

    );
}

const styles = StyleSheet.create( {
    modalContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2929297a"
    },
    popup: {
        backgroundColor: "#f2f2f2",
        height: 150,
        width: 200,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        elevation: 8,
        shadowRadius: -4,
        shadowOpacity: 0.25
    },
    loader: {
        borderRadius: 50,
        height: 45,
        width: 45,
        borderColor: "#aaa",
        borderWidth: 4,
        padding: 4,
        margin: 6
    },
    text: {
        fontSize: 16,
        color: "#292929",
        paddingTop: 8
    }
} )
