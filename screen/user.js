import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import tw from "twrnc";
import {
  AntDesign,
  FontAwesome5,
  SimpleLineIcons,
  Entypo,
  Ionicons,
  Feather,
} from "@expo/vector-icons";

export default function User({ navigation }) {
  return (
    <View style={tw`h-full bg-[#E5E5E5]`}>
      <View style={tw`mx-4 mt-6`}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("ChangePass")}
        >
          <View
            style={tw`rounded-xl bg-white shadow-2xl shadow-slate-400 flex flex-row justify-between px-2 items-center  h-20`}
          >
            <View>
              <Image
                source={require("../assets/imgs/user.png")}
                style={tw`my-2 rounded-full shadow-2xl`}
              />
            </View>
            <View>
              <Text style={tw`text-xl font-bold`}>Sadek Hossen</Text>
              <Text style={tw`text-gray-500`}>sadekbranding@gmail.com</Text>
            </View>
            <View
              style={tw`relative h-12 w-12 rounded-full items-center justify-center bg-gray-200`}
            >
              <AntDesign style={tw``} name="bells" size={24} color="black" />
              <View
                style={tw`absolute  rounded-full h-4 w-4 bg-red-500 text-center items-center top-0 right-0`}
              >
                <Text style={tw`text-white`}>3</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View
          style={tw`rounded-xl bg-white shadow-2xl shadow-slate-400 flex flex-row justify-between px-2 items-center mt-8 h-20 `}
        >
          <View style={tw``}>
            <FontAwesome5 name="user-circle" size={30} color="grey" />
          </View>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Welcome")}
          >
            <View style={tw`justify-center w-4/6`}>
              <Text style={tw`text-left text-2xl font-semibold text-gray-600`}>
                Account setting
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={tw`items-center justify-center `}>
            <SimpleLineIcons name="note" size={24} color="grey" />
          </View>
        </View>
        <View style={tw`rounded-xl bg-white shadow-2xl shadow-slate-400 mt-4`}>
          <View
            style={tw`flex flex-row justify-between px-2 items-center h-18`}
          >
            <View style={tw``}>
              <Entypo name="language" size={30} color="grey" />
            </View>
            <View style={tw`justify-center w-4/6`}>
              <Text style={tw`text-left text-2xl font-semibold text-gray-600`}>
                Language
              </Text>
            </View>
            <View style={tw`items-center justify-center `}>
              <AntDesign name="right" size={24} color="grey" />
            </View>
          </View>
          <View
            style={tw`flex flex-row justify-between px-2 items-center h-18`}
          >
            <View style={tw``}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={30}
                color="grey"
              />
            </View>
            <View style={tw`justify-center w-4/6`}>
              <Text style={tw`text-left text-2xl font-semibold text-gray-600`}>
                Feedback
              </Text>
            </View>
            <View style={tw`items-center justify-center `}>
              <AntDesign name="right" size={24} color="grey" />
            </View>
          </View>
          <View
            style={tw`flex flex-row justify-between px-2 items-center h-18`}
          >
            <View style={tw``}>
              <AntDesign name="staro" size={30} color="grey" />
            </View>
            <View style={tw`justify-center w-4/6`}>
              <Text style={tw`text-left text-2xl font-semibold text-gray-600`}>
                Rate us
              </Text>
            </View>
            <View style={tw`items-center justify-center `}>
              <AntDesign name="right" size={24} color="grey" />
            </View>
          </View>
          <View
            style={tw`flex flex-row justify-between px-2 items-center h-18`}
          >
            <View style={tw``}>
              <Feather name="arrow-up-circle" size={30} color="grey" />
            </View>
            <View style={tw`justify-center w-4/6`}>
              <Text style={tw`text-left text-2xl font-semibold text-gray-600`}>
                New Version
              </Text>
            </View>
            <View style={tw`items-center justify-center `}>
              <AntDesign name="right" size={24} color="grey" />
            </View>
          </View>
        </View>
        <View style={tw`mt-6 items-center justify-center`}>
          <View style={tw`w-2/3`}>
            <TouchableHighlight>
              <View style={tw`bg-red-500 rounded-2xl py-4 px-6`}>
                <Text style={tw`text-white text-xl font-bold text-center `}>
                  Logout
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
}
