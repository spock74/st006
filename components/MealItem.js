import { View, Text, Pressable, Image, StyleSheet} from "react-native";

function MealItem({title, imageUrl, complexity, affordability, duration}) {
    
    return (
        <View style={styles.mealItem}>
            <Pressable>
                <View style={styles.style}>
                    <Text style={styles.title}>{title}</Text>
                    <Image style={styles.image} source={{uri: imageUrl}} style={styles.image}/>
                </View>
                <View style={styles.details}>
                    <Text>Duration: {duration}</Text>
                    <Text>Complexity: {complexity.toUpperCase()}</Text>
                    <Text>Affordability: {affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        overflow: 'hidden',
        backgroundColor:'white',    
        marginTop: 16,
        elevation:4
    },
    title:{ 
        padding: 8,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image:{
        borderRadius: 8,
        width: '100%',
        height: 200,
    },
    details:{
        padding: 8,
    }


});

export default MealItem;