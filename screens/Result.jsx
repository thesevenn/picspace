import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import Card from "../components/Card";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { request } from "../axios";

export default function Result( { query } ) {
    const [ result, setResult ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( false );
    useEffect( () => {
        getSearchResults( query );
    }, [] );

    const getSearchResults = async () => {
        setIsLoading( true );
        try {
            const response = await request.get( `/search/photos?page=1&per_page=40&query=${query}` );
            if( !response.data ) throw new Error( response.statusText );
            else setResult( response.data.results );
            setIsLoading( false );
        } catch( error ) {
            console.log( error );
            setIsLoading( false );
        }
    }
    return (
        <>
            <Loader visible={isLoading} />
            {
                !isLoading && result.length == 0 ? <Error /> : null
            }
            <ScrollView contentContainerStyle={styles.scrollview}>
                {
                    result.map( res => <Card key={res.id} doc={res} /> )
                }
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create( {

    scrollview: {
        backgroundColor: "#fff",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 4,
        marginBottom: 8
    }
} );