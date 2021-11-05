import React from 'react';
import { View, Text, Span, Button, Image } from 'react-native';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';


const bikes = [
    { id: 1, name: "Pinarello Bike" , price: 1234, img: 'https://cdn.shopify.com/s/files/1/1600/5829/files/evil-insurgent-tranny-hero_640x.png?v=17453130864036632235' }, 
    { id: 2, name: "Brompton Bike", price: 144.00, img: 'https://cdn.shopify.com/s/files/1/1600/5829/files/evil-insurgent-tranny-hero_640x.png?v=17453130864036632235' }, 
    { id: 3, name: "Schwinn Bike", price: 123.00, img: 'https://cdn.shopify.com/s/files/1/1600/5829/files/evil-insurgent-tranny-hero_640x.png?v=17453130864036632235' }, 
    { id: 4, name: "Norco Bike",price: 820, img: 'https://cdn.shopify.com/s/files/1/1600/5829/files/evil-insurgent-tranny-hero_640x.png?v=17453130864036632235' }, 
];



export default function HomeScreen() {



    return <SafeAreaView style={{ backgroundColor: 'white', flex: 1, }}>

        <ScrollView style={{ backgroundColor: 'white', flex: 1, marginLeft: 15, marginRight: 15 }} showsVerticalScrollIndicator={false}>

            <Text style={{}}>
                <Text style={{ fontSize: 20 }}>
                    The World's
                </Text>
                <Text style={{ fontSize: 25, color: 'orange', fontWeight: 'bold' }}> Best Bike</Text>
            </Text>

            <Text style={{ marginTop: 10, marginBottom: 10, fontWeight: 'bold' }}>Categories</Text>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
                renderItem={({ bike, index }) => {

                    return <TouchableOpacity>
                        <View style={{
                            height: 230,
                            backgroundColor: '#e3e3e3',
                            width: 170,
                            marginHorizontal: 2,
                            borderRadius: 10,
                            marginBottom: 20,
                            padding: 15,
                        }}>

                            <View style={{ alignItems: 'flex-end' }}>
                                <View style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'white'

                                }}>
                                    <Icon
                                        name="favorite-outline"
                                        size={18}
                                        color='black'
                                    />
                                </View>
                            </View>


                            <View
                                style={{
                                    height: 120,
                                    width: 100,
                                    alignItems: 'center',

                                }}>

                                <Image
                                    source={{ uri: bikes[index].img }}
                                    
                                    style={{ flex: 1, resizeMode: 'cover', height: 225, width: 170, marginLeft: 50, marginBottom: 0, }}
                                />
                            </View>


                            <Text style={{  fontSize: 15, marginTop: 15, alignSelf: "center", color:'grey' }}>
                                {bikes[index].name}
                            </Text>

                            <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 0, alignSelf:'center' }}>
                            <Text style={{ fontSize: 17, color: 'orange', fontWeight: 'bold' }}>$ </Text>

                            <Text>{bikes[index].price}</Text>
                            </Text>
                        </View>





                    </TouchableOpacity>
                }}
            />


        </ScrollView>





    </SafeAreaView>
}