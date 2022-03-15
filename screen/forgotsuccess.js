import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";

export default function ForgotSucces() {
  return (
    <SafeAreaView style={tw`h-full bg-white flex justify-end`}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={tw`mx-8 mt-32 `}>
              <View style={tw`mx-auto`}>
                <AntDesign name="checkcircle" size={82} color="#32B768" />
              </View>
              <Text
                style={tw`text-black text-4xl font-bold ml-4 mt-4 text-center`}
              >
                Success
              </Text>
              <Text style={tw`text-black/60 text-2xl mt-4 ml-4 text-center`}>
                Please check your email for create a new password
              </Text>
              <Text
                style={tw`text-black/50 text-xl mt-8 ml-4 font-bold text-center`}
              >
                Can't get email?{" "}
                <Text style={tw`text-[#32B768]`}>Resubmit</Text>
              </Text>
            </View>
            <View style={tw`flex flex-row items-center mx-5 h-56 mt-8 px-8`}>
              <View style={tw`w-full mb-4`}>
                <TouchableHighlight>
                  <View style={tw`bg-[#32B768] rounded-xl py-5`}>
                    <Text style={tw`text-white font-bold text-center text-lg`}>
                      Back Email
                    </Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
