import { useState, useEffect } from 'react';
import { ScrollView, Button, StyleSheet, View, RefreshControl } from "react-native";

import Search from "../components/Search";
import Card from '../components/Card';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { request } from '../axios';

export default function Home( { setQuery, navigation } ) {
    const [ docs, setDocs ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( false );

    useEffect( () => { getRandomPhotos(); }, [] );

    const getRandomPhotos = async () => {
        setIsLoading( true );
        try {
            const response = await request.get( 'photos/random?count=40' );
            if( !response.data ) throw new Error( response.statusText );
            else setDocs( response.data );
            setIsLoading( false );
        } catch( error ) {
            console.log( error );
            setIsLoading( false );
        }
    }
    let state = false
    const refresh = () => {
        state = true;
        getRandomPhotos();
        state = false
    }
    const goToResult = () => navigation.navigate( 'Result' );

    return (
        <>
            <Loader visible={isLoading} />
            <View style={styles.container}>
                <Search setQuery={setQuery} getSearchResults={goToResult} />
                {
                    !isLoading && docs.length == 0 ? <Error /> : null
                }
                <ScrollView contentContainerStyle={styles.scrollview} refreshControl={
                    <RefreshControl
                        refreshing={state}
                        onRefresh={refresh}
                    />
                }>
                    {
                        docs.map( doc => <Card key={doc.id} doc={doc} /> )
                    }
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create( {
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 60
    },
    scrollview: {
        backgroundColor: "#fff",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 4,
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
