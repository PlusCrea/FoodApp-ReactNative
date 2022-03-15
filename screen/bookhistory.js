import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function BookHistory() {
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
  ];
  const renderRestItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <View
          style={tw`p-2 bg-white rounded-xl h-22 my-1 shadow-2xl shadow-gray-300`}
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
    <View style={tw`bg-white `}>
      <View
        style={tw`h-25 bg-green-500 rounded-b-3xl items-center justify-center`}
      >
        <Text style={tw`text-white font-semibold text-4xl `}>
          Booking History
        </Text>
      </View>
      <FlatList
        style={tw`mt-4 `}
        data={restdata}
        renderItem={renderRestItem}
        keyExtractor={(item) => item.id}
      />
      <View style={tw`items-center mt-6`}>
        <TouchableHighlight>
          <View
            style={tw`shadow-xl shadow-gray-500 rounded-xl h-25 flex flex-row items-center justify-center px-8`}
          >
            <Text style={tw`text-black/50 text-6xl`}>+</Text>
            <Text
              style={tw`text-black/60 font-semibold text-center text-2xl ml-3`}
            >
              Booking more
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={tw`h-50 bg-white`}></View>
    </View>
  );
}
