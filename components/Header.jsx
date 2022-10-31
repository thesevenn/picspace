import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>GettyPICs</Text>
            </View>
        </View>
    );
}

const width = Dimensions.get( "window" ).width;
const styles = StyleSheet.create( {
    container: {
        backgroundColor: '#292929',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        backgroundColor: "#292929",
        width: width,
        padding: 7,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
    },
    text: {
        fontSize: 32,
        color: "#f2f2f2",
        fontWeight: "800",
        textAlign: "center",
        alignSelf: "center",
        padding: 2,
        margin: 2
    }
} );