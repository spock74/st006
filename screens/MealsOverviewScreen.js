import {View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native';
import MealItem from '../components/MealItem';
import {MEALS} from '../data/dummy-data';

function MealsOverviewScreen({route}) {
    const catID = route.params?.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catID) >= 0; 
    });

    function renderMealItem (itemData){
    const item_ = itemData.item;

    const mealItemProps = {
        title: item_.title,
        imageUrl: item_.imageUrl,
        complexity: item_.complexity,
        affordability: item_.affordability,
        duration: item_.duration,
    };
    
        return <MealItem {...mealItemProps}/>
    }
    
    return (
        <View style={styles.container}>
            <FlatList 
            data={displayedMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
            />
        </View>
    )
};              
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default MealsOverviewScreen;