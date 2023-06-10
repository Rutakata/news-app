import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";


const Button = ({text}) => {
    return <TouchableOpacity>
        <Text>{text}</Text>
    </TouchableOpacity>
}

// const styles = StyleSheet.create({
//     container: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// })

export default Button;