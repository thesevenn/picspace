import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function Search( { setQuery, getSearchResults } ) {
    return (
        <View style={Styles.searchBar}>
            <TextInput placeholder="search images" style={Styles.search} onChangeText={setQuery} />
            <TouchableOpacity activeOpacity={0.5} style={Styles.button} onPress={getSearchResults}><Text style={Styles.text_md}>search</Text></TouchableOpacity>
        </View>
    );
}

const Styles = StyleSheet.create( {
    searchBar: {
        color: "#f2f2f2",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: "#292929",
        margin: 10,
    },
    search: {
        color: "#292929",
        borderRadius: 4,
        width: 280,
        height: 40,
        padding: 8,
        borderWidth: 1,
        borderColor: "#292929",
    },
    text_md: {
        color: "#f2f2f2",
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center"
    },
    button: {
        backgroundColor: "#292929",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 4,
        margin: 8,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: -3
    }
} );