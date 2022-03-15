import {
  View,
  Text,
  Image,
  TouchableHighlight,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";

export default function RestDetail({ navigation }) {
  const restdata = [
    {
      id: 1,
      name: "Ambrosia Hotel & Restaurant",
      desc: "kazi Deiry, Taiger Pass Chittagong",
      url: require("../assets/imgs/resto1.png"),
    },
    {
      id: 2,
      name: "Tava Restaurant",
      desc: "Zakir Hossain Rd, Chittagong",
      url: require("../assets/imgs/resto2.png"),
    },
    {
      id: 3,
      name: "Haatkhola",
      desc: "6 Surson Road, Chittagong",
      url: require("../assets/imgs/resto1.png"),
    },
    {
      id: 4,
      name: "Hotel Zaman Restaurant",
      desc: "kazi Deiry, Taiger Pass Chittagong",
      url: require("../assets/imgs/resto2.png"),
    },
  ];
  const renderRestItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <View
          style={tw`p-2 bg-white rounded-xl h-22 my-1 border-2 border-gray-200`}
        >
          <View style={tw`flex flex-row`}>
            <View>
              <Image source={item.url} style={tw`w-18 h-18 rounded-lg`} />
            </View>
            <View style={tw`ml-2`}>
              <Text style={tw`text-lg font-bold `}>{item.name}</Text>
              <View style={tw`flex flex-row justify-between mr-4`}>
                <View style={tw`flex flex-row mt-1 w-3/6 mr-2 items-center`}>
                  <Ionicons name="location-sharp" size={24} color="#32B768" />
                  <Text style={tw`text-sm text-gray-500 font-semibold`}>
                    {item.desc}
                  </Text>
                </View>
                <View style={tw``}>
                  <TouchableHighlight>
                    <View style={tw`bg-[#32B768] rounded-xl py-3 px-6`}>
                      <Text style={tw`text-white font-bold text-center `}>
                        Check
                      </Text>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={tw` h-full flex justify-end`}>
      <ScrollView>
        <View
          style={tw`h-15 bg-green-500 rounded-b-3xl flex flex-row items-center justify-around`}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>

          <Text style={tw`text-white font-semibold text-lg `}>
            Detail Restaurant
          </Text>
        </View>
        <View style={tw`mt-2 p-4 bg-white rounded-3xl `}>
          <Text style={tw`text-xl font-bold `}>Tava Restaurant</Text>
          <View style={tw`flex flex-row mt-1 mr-2 items-center`}>
            <Ionicons name="location-sharp" size={20} color="#32B768" />
            <Text style={tw`text-sm text-gray-500 font-semibold ml-2`}>
              kazi Deiry, Taiger Pass,Chittagong
            </Text>
          </View>
          <Image
            source={require("../assets/imgs/restobig.png")}
            style={tw`my-2 rounded-lg`}
          />
          <View style={tw`flex flex-row items-center  justify-between`}>
            <View style={tw`mt-1 ml-2`}>
              <View style={tw`flex flex-row  items-center`}>
                <AntDesign name="clockcircle" size={20} color="#32B768" />
                <Text style={tw`text-sm text-gray-500 font-semibold ml-2`}>
                  Open Today
                </Text>
              </View>
              <Text style={tw`mt-2 font-bold `}>10:00 AM - 12:00 PM</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Map")}>
              <View style={tw`flex flex-row items-end `}>
                <FontAwesome5 name="directions" size={20} color="#2C8DFF" />
                <Text style={tw`text-blue-500 font-bold ml-2`}>
                  Visit the Restaurant
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`mt-4 p-4 bg-white rounded-3xl h-auto`}>
          <View style={tw`flex flex-row justify-between mb-4`}>
            <View style={tw`flex`}>
              <Text style={tw`text-lg font-bold`}>List other restaurant</Text>
              <Text style={tw`text-lg text-gray-400 `}>
                check the menu at this restaurant
              </Text>
            </View>
            <View>
              <Text style={tw`text-lg text-[#32B768] font-semibold`}>
                See All
              </Text>
            </View>
          </View>
          <FlatList
            data={restdata}
            renderItem={renderRestItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
      <View
        style={tw`bg-white rounded-t-3xl h-1/6 items-center justify-center `}
      >
        <View style={tw`w-2/3`}>
          <TouchableHighlight>
            <View style={tw`bg-[#32B768] rounded-xl py-4 px-6`}>
              <Text style={tw`text-white font-bold text-center `}>Booking</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
