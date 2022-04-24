import {View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native';
import MealItem from '../components/MealItem';
import {MEALS} from '../data/dummy-data';

function MealsOverviewScreen({route}) {
    const catID =route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catID) >= 0; 
    });
    
    function renderMealItem (itemData){
        console.log('itemData', itemData.item.title);
        return <MealItem title={itemData.item.title} />
    }
    return (
        <View style={styles.container}>
            <FlatList 
            data={displayedMeals}
            keyEztractor={(item) => item.id}
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