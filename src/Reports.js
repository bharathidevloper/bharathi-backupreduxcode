import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ReportsStack = createStackNavigator();



const Reports = () => {
    return (

        <View style={{
            justifyContent: 'center', flex
                : 1, alignItems: 'center'
        }}>

            <Text>ReportsScreen</Text>
        </View>
    )
}
const ReportsStackScreen = ({ navigation }) => {
    return (
        <ReportsStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#127dee',
                },
                headerTintColor: '#fff',
            }}>
            <ReportsStack.Screen
                name="Reports"
                component={Reports}
                options={{
                    headerStyle: {
                        backgroundColor: '#127dee',
                        height: 80
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {

                    },
                    headerLeft: () => (
                        <Icon
                            name="chevron-left"
                            size={25}
                            color="#fff"
                            style={{ marginLeft: 10 }}
                            onPress={() => navigation.goBack()}
                        />
                    ),
                }}
            />
        </ReportsStack.Navigator>
    );
};

export default ReportsStackScreen;