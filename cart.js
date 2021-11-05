import React from 'react';
import { View, ScrollView, SafeAreaView, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';


export default function CartScreen() {
    return <SafeAreaView style={{ backgroundColor: 'white', flex: 1, }}>
        <ScrollView style={{ backgroundColor: 'white', flex: 1, marginLeft: 20, marginRight: 15 }}>

            <View style={{ paddingTop: 20, display: 'flex', flexDirection: 'row' }}>
                <View style={{ borderRadius: 20 }}>
                    <Image
                        source={{ uri: 'https://m.media-amazon.com/images/I/81wGn2TQJeL._SX425_.jpg' }}
                        style={{ height: 100, width: 100, borderRadius: 20 }}
                    />
                </View>

                <View style={{ marginLeft: 10, marginTop: 5, marginRight: 20 }}>
                    <Text style={{ paddingBottom: 10, fontSize: 20 }}>Pinarello Bike</Text>
                    <Text style={{ paddingBottom: 10, color: 'grey' }}>Mountain Bike</Text>
                    <Text>
                        <Text style={{ color: 'orange' }}>$</Text>
                        <Text style={{ fontWeight: 'bold' }}>17000</Text>
                    </Text>
                </View>

                <View style={{ paddingTop: 20 }}>
                    <TouchableOpacity style={{ justifyContent: 'center' }}>
                        <AntDesign name="delete" size={15} color="orange" style={{ marginLeft: 40 }} />
                    </TouchableOpacity>

                    <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
                        <Text style={{
                            height: 20,
                            width: 20,
                            backgroundColor: 'black',
                            borderRadius: 500,
                            color: 'white',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginRight: 5,
                        }}>-</Text>
                        <Text>1</Text>
                        <Text style={{
                            height: 20,
                            width: 20,
                            backgroundColor: 'orange',
                            borderRadius: 500,
                            color: 'white',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginRight: 5,
                            marginLeft: 5
                        }}>+</Text>
                    </View>
                </View>

            </View>

            <View style={{ paddingTop: 20, display: 'flex', flexDirection: 'row' }}>
                <View style={{ borderRadius: 20 }}>
                    <Image
                        source={{ uri: 'https://m.media-amazon.com/images/I/81wGn2TQJeL._SX425_.jpg' }}
                        style={{ height: 100, width: 100, borderRadius: 20 }}
                    />
                </View>

                <View style={{ marginLeft: 10, marginTop: 5, marginRight: 20 }}>
                    <Text style={{ paddingBottom: 10, fontSize: 20 }}>Brompton Bike</Text>
                    <Text style={{ paddingBottom: 10, color: 'grey' }}>Road Bike</Text>
                    <Text>
                        <Text style={{ color: 'orange' }}>$</Text>
                        <Text style={{ fontWeight: 'bold' }}>17000</Text>
                    </Text>
                </View>

                <View style={{ paddingTop: 20 }}>
                    <TouchableOpacity style={{ justifyContent: 'center' }}>
                        <AntDesign name="delete" size={15} color="orange" style={{ marginLeft: 40 }} />
                    </TouchableOpacity>

                    <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
                        <Text style={{
                            height: 20,
                            width: 20,
                            backgroundColor: 'black',
                            borderRadius: 500,
                            color: 'white',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginRight: 5,
                        }}>-</Text>
                        <Text>1</Text>
                        <Text style={{
                            height: 20,
                            width: 20,
                            backgroundColor: 'orange',
                            borderRadius: 500,
                            color: 'white',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginRight: 5,
                            marginLeft: 5
                        }}>+</Text>
                    </View>
                </View>

            </View>

            <View style={{ paddingTop: 20, display: 'flex', flexDirection: 'row' }}>
                <View style={{ borderRadius: 20 }}>
                    <Image
                        source={{ uri: 'https://m.media-amazon.com/images/I/81wGn2TQJeL._SX425_.jpg' }}
                        style={{ height: 100, width: 100, borderRadius: 20 }}
                    />
                </View>

                <View style={{ marginLeft: 10, marginTop: 5, marginRight: 20 }}>
                    <Text style={{ paddingBottom: 10, fontSize: 20 }}>Pinarello Bike</Text>
                    <Text style={{ paddingBottom: 10, color: 'grey' }}>Urban Bike</Text>
                    <Text>
                        <Text style={{ color: 'orange' }}>$</Text>
                        <Text style={{ fontWeight: 'bold' }}>1,250</Text>
                    </Text>
                </View>

                <View style={{ paddingTop: 20 }}>
                    <TouchableOpacity style={{ justifyContent: 'center' }}>
                        <AntDesign name="delete" size={15} color="orange" style={{ marginLeft: 40 }} />
                    </TouchableOpacity>

                    <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
                        <Text style={{
                            height: 20,
                            width: 20,
                            backgroundColor: 'black',
                            borderRadius: 500,
                            color: 'white',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginRight: 5,
                        }}>-</Text>
                        <Text>1</Text>
                        <Text style={{
                            height: 20,
                            width: 20,
                            backgroundColor: 'orange',
                            borderRadius: 500,
                            color: 'white',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginRight: 5,
                            marginLeft: 5
                        }}>+</Text>
                    </View>
                </View>

            </View>




            <View style ={{ marginTop: 20, 
                backgroundColor: '#e3e3e3',
                 padding: 20,
                 borderRadius: 20,
                 paddingBottom: 30,
                 paddingTop: 30
                 }}>
                <View style={{display:'flex', flexDirection: 'row',justifyContent: 'space-between', paddingBottom: 30}}>
                    <Text style={{color:'grey'}}>
                        Subtotal
                    </Text>
                    <Text>
                        <Text style={{ color: 'orange' }}>$</Text>
                        <Text style={{ fontWeight: 'bold' }}>3,400</Text>
                    </Text>
                </View>

                <View style={{display:'flex', flexDirection: 'row',justifyContent: 'space-between', paddingBottom: 30}}>
                    <Text style={{color:'grey'}}>
                        Shipping fee
                    </Text>
                    <Text>
                        <Text style={{ color: 'orange' }}>$</Text>
                        <Text style={{ fontWeight: 'bold' }}>100.00</Text>
                    </Text>
                </View>

                <View
                    style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 1,
                        
                    }}
                />

                <View style={{display:'flex', flexDirection: 'row',justifyContent: 'space-between'}}>
                    <Text style = {{fontWeight: 'bold'}}>
                        Total
                    </Text>
                    <Text>
                        <Text style={{ color: 'orange' }}>$</Text>
                        <Text style={{ fontWeight: 'bold' }}>3,500</Text>
                    </Text>
                </View>


            </View>


        </ScrollView>
    </SafeAreaView>

}