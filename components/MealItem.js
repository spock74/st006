import { View, Text } from "react-native";

function MealItem({title}) {
    console.log(title);
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

export default MealItem;