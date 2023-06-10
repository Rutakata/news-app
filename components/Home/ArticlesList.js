import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from "expo-router";
import Button from "../Common/Button";
import { icons } from "../../constants";
import useFetch from "../../hooks/useFetch";
import Article from "../Article/Article";


const ArticlesList = () => {
    const router = useRouter();
    const { data, isLoading } = useFetch(1, 'restaurant');

    const handleSearchButton = () => {}

    return (
        <View>
            <View style={{flex: 1}}>
                <TextInput 
                    placeholder="Search articles by keyword"
                    onChange={() => {}}
                    style={{display: 'flex'}}
                />
                <Button iconUrl={icons.search} dimension={'100%'} handlePress={handleSearchButton} />
            </View>
            <View>
                <Text>From:</Text>
                <Text>To:</Text>
            </View>
            {
                isLoading ?
                <View>
                    <ActivityIndicator size='large' />
                </View> :
                <View style={styles.articlesContainer}>
                    <Text style={styles.title}>Found articles</Text>
                    { data.map(article => {
                        return <Article article={article} />
                    })}
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    searchInput: {
        display: 'inline-block'
    },
    articlesContainer: {
        display: 'flex',
        gap: 10
    },
    title: {
        fontSize: 24,
        alignSelf: 'center',
        paddingTop: 10
    }
})

export default ArticlesList;