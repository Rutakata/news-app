import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button } from "../Common/Button";
import { color } from "react-native-reanimated";

const Article = ({article}) => {
    console.log(article)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.description}>{article.description}</Text>
            
            <TouchableOpacity style={styles.detailsButton}>
                <Text>Details</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginTop: 0
    },
    description: {
        fontSize: 16
    },
    container: {
        borderWidth: 5,
        borderRadius: 10,
        borderColor: 'white',
        padding: 10,
        backgroundColor: 'white'
    },
    detailsButton: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        alignItems: 'flex-end',
        marginTop: 10,
        fontSize: 14,
        alignSelf: 'flex-end',
    }
})

export default Article

