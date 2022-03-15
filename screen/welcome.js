import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import { Modalize } from "react-native-modalize";
import Account from "./account";

export default function Welcome({ navigation }) {
  const [create, setCreate] = useState(true);
  const modalizeRef = useRef(null);
  const onOpen = (createparam) => {
    setCreate(createparam);
    modalizeRef.current?.open();
  };
  return (
    <SafeAreaView style={tw`h-full bg-white flex justify-end`}>
      <View style={tw`h-3/5 px-4 flex justify-end items-center`}>
        <Image source={require("../assets/imgs/ordersuccess.png")} />
      </View>

      <Modalize
        ref={modalizeRef}
        adjustToContentHeight={true}
        //        showsVerticalScrollIndicator={true}
      >
        <View style={tw`h-[36rem]`}>
          <Account createp={create} navigation={navigation} />
        </View>
      </Modalize>
      <View style={tw`h-auto my-4 `}>
        <View style={tw``}>
          <Text style={tw`text-3xl font-bold text-black  text-center `}>
            Welcome
          </Text>
        </View>
        <View style={tw``}>
          <Text style={tw`text-base  text-black/70 px-2 text-center `}>
            Before enjoying Foodmedia services Please register first
          </Text>
        </View>
      </View>
      <View style={tw`flex items-center mx-5 h-auto `}>
        <View style={tw`w-full mb-4`}>
          <TouchableHighlight onPress={() => onOpen(true)}>
            <View style={tw`bg-[#32B768] rounded-xl py-5`}>
              <Text style={tw`text-white font-semibold text-center`}>
                Create Account
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={tw`w-full`}>
          <TouchableHighlight onPress={() => onOpen(false)}>
            <View style={tw`bg-[#D1FAE5]  rounded-xl py-5`}>
              <Text style={tw`text-[#10B981] font-semibold text-center`}>
                Login
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={tw`my-4`}>
          <Text style={tw`text-black text-center`}>
            By logging in or registering, you have agreed to the
            <Text style={tw`text-[#10B981]`}>Terms and Conditions</Text> and
            <Text style={tw`text-[#10B981]`}>Privacy Policy</Text>.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
