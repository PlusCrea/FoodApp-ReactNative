import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  TextInput,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import tw from "twrnc";

export default function Forgot({ navigation }) {
  const [email, setEmail] = useState();
  return (
    <SafeAreaView style={tw`h-full bg-white flex justify-end`}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={tw`mx-8 mt-32`}>
              <Text style={tw`text-black text-xl font-bold ml-4`}>
                Forget Password
              </Text>
              <Text style={tw`text-black/50 text-lg mt-2 ml-4`}>
                Enter your registered email below
              </Text>

              <View style={tw`mt-8`}>
                <Text style={tw`ml-4 text-black font-bold text-lg mb-2`}>
                  Email Address
                </Text>
                <TextInput
                  style={tw`border border-black/30 rounded-xl h-15 pl-4`}
                  onChangeText={setEmail}
                  value={email}
                  placeholder="Eg namaemail@emailkamu.com"
                  keyboardType="email-address"
                />
                <Text style={tw`text-black/30 text-lg mt-4 ml-4 font-semibold`}>
                  Remember the password?{" "}
                  <Text style={tw`text-[#32B768]`}>Sign in</Text>
                </Text>
              </View>
            </View>
            <View style={tw`flex flex-row items-center mx-5 h-56 mt-8 px-8`}>
              <View style={tw`w-full mb-4`}>
                <TouchableHighlight
                  onPress={() => navigation.navigate("ForgotSucces")}
                >
                  <View style={tw`bg-[#32B768] rounded-xl py-5`}>
                    <Text style={tw`text-white font-bold text-center text-lg`}>
                      Submit
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
