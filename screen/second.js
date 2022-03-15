import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
} from "react-native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";

export default function Second({ navigation }) {
  return (
    <SafeAreaView style={tw`h-full bg-white flex justify-end`}>
      <View style={tw`h-3/5 items-center`}>
        <Image source={require("../assets/imgs/order.png")} />
      </View>
      <View style={tw`h-auto my-8`}>
        <View style={tw`mt-8 `}>
          <Text style={tw`text-3xl font-bold text-black  text-center `}>
            Select the Favorites Menu
          </Text>
        </View>
        <View style={tw`mt-8 `}>
          <Text style={tw`text-base  text-black/70 px-2 text-center `}>
            Now eat well, don't leave the house,You can choose your favorite
            food only with one click
          </Text>
        </View>
      </View>
      <View style={tw`flex flex-col  justify-center h-16`}>
        <View style={tw`flex flex-row justify-between mx-3 `}>
          <View>
            <Text style={tw`text-base leading-5 text-black/70`}>Skip</Text>
          </View>

          <View style={tw`flex flex-row `}>
            <View style={tw`h-2.5 w-2.5 bg-[#E6E6E6] rounded-full mr-2`}></View>
            <View style={tw`h-2.5 w-2.5 bg-[#32B768] rounded-full mr-2`}></View>
            <View style={tw`h-2.5 w-2.5 bg-[#E6E6E6] rounded-full`}></View>
          </View>
          <TouchableHighlight onPress={() => navigation.navigate("Third")}>
            <View style={tw`h-6 w-6`}>
              <AntDesign name="arrowright" size={24} color="#32B768" />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
}
