import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Error() {
    return (
        <View style={styles.errorCard}>
            <Text style={styles.title}>We are sorry</Text>
            <Text style={styles.message}>Looks like something went wrong, Please try again after sometime.</Text>
        </View>
    );
}

const styles = StyleSheet.create( {
    errorCard: {
        // flex: 1,
        backgroundColor: "#292929",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 200,
        height: 150,
        width: 250,
        borderRadius: 8,
        marginHorizontal: 72
    },
    title: {
        fontSize: 28,
        color: "#f2f2f2",
        fontWeight: "800",
        margin: 4
    },
    message: {
        fontSize: 18,
        color: "#c2c2c2",
        fontWeight: "500",
        margin: 4,
        paddingHorizontal: 16
    }
} )