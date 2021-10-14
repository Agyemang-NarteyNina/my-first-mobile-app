import React from 'react';
import { View, Text, Span, Button, Image } from 'react-native';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function HomeScreen() {

    const bikes = [
        { id: 1, price: 1234, img: 'https://unsplash.com/photos/yjAFnkLtKY0/download?force=true&w=640' }, 
        { id: 2, price: 1234, img: 'https://unsplash.com/photos/yjAFnkLtKY0/download?force=true&w=640' }, 
        { id: 3, price: 1234, img: 'https://unsplash.com/photos/yjAFnkLtKY0/download?force=true&w=640' }, 
        { id: 4, price: 1234, img: 'https://unsplash.com/photos/yjAFnkLtKY0/download?force=true&w=640' }, 
        { id: 5, price: 1234, img: 'https://unsplash.com/photos/yjAFnkLtKY0/download?force=true&w=640' }
    ];



    return <SafeAreaView style={{ backgroundColor: 'white', flex: 1, }}>
        <ScrollView style={{ backgroundColor: 'white', flex: 1, marginLeft: 15, marginRight: 15 }}>

            <Text style={{}}>
                <Text style={{ fontSize: 20 }}>
                    The World's
                </Text>
                <Text style={{ fontSize: 25, color: 'orange', fontWeight: 'bold' }}> Best Bike</Text>
            </Text>

            <Text style={{ marginTop: 10, marginBottom: 10, fontWeight: 'bold' }}>Categories</Text>

            <ScrollView horizontal={true}>
                <TouchableOpacity style={{ backgroundColor: '#e3e3e3', padding: 10, borderRadius: 5, marginRight: 10 }}>
                    <Text> All </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: '#e3e3e3', padding: 10, borderRadius: 5, marginRight: 10 }}>
                    <Text> RoadBike </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: '#e3e3e3', padding: 10, borderRadius: 5, marginRight: 10 }}>
                    <Text> Mountain </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: '#e3e3e3', padding: 10, borderRadius: 5, marginRight: 10 }}>
                    <Text> UrbanMotor </Text>
                </TouchableOpacity>
            </ScrollView>

            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                }}
                numColumns={2}
                data={bikes}
                renderItem={({ bike }) => {
                    
                    console.log(bike)

                    return <TouchableOpacity>
                        <View style={{
                            height: 225,
                            backgroundColor: '#e3e3e3',
                            width: 170,
                            marginHorizontal: 2,
                            borderRadius: 10,
                            marginBottom: 20,
                            padding: 15,
                        }}>

                            <View style={{ alignItems: 'flex-end' }}>
                                <View style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'white'

                                }}>
                                    <Icon
                                        name="favorite"
                                        size={18}
                                        color='black'
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    height: 100,
                                    width: 100,
                                    alignItems: 'center',
                                }}>
                                <Image
                                    source={{ uri: "https://unsplash.com/photos/yjAFnkLtKY0/download?force=true&w=640" }}
                                    style={{ flex: 1, resizeMode: 'contain' }}
                                />
                            </View>

                            <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>
                                {'1500'}
                            </Text>
                        </View>





                    </TouchableOpacity>
                }}
            />


        </ScrollView>





    </SafeAreaView>
}