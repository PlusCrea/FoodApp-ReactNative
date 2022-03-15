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

export default function ChangePass({ navigation }) {
  const [pass, setPass] = useState();
  const [confirmPass, setConfirmPass] = useState();
  return (
    <SafeAreaView>
      <View style={tw`bg-white flex justify-end`}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={tw`mt-56`} //Burada textinputa focus olunca burası calisiyor. Buraya detaylı bakmak lazım.
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <View style={tw`mx-8 mt-32`}>
                <Text style={tw`text-black text-xl font-bold ml-4`}>
                  Change New Password
                </Text>
                <Text style={tw`text-black/50 text-lg mt-2 ml-4`}>
                  Enter a different password with the previous
                </Text>

                <View style={tw`mt-8`}>
                  <Text style={tw`ml-4 text-black font-bold text-lg mb-2`}>
                    New Password
                  </Text>
                  <TextInput
                    style={tw`border border-black/30 rounded-xl h-15 pl-4`}
                    onChangeText={setPass}
                    value={pass}
                    placeholder="**** **** ****"
                    secureTextEntry={true}
                  />
                </View>
                <View style={tw`mt-4`}>
                  <Text style={tw`ml-4 text-black font-bold text-lg mb-2`}>
                    Confirm Password
                  </Text>
                  <TextInput
                    style={tw`border border-black/30 rounded-xl h-15 pl-4`}
                    onChangeText={setConfirmPass}
                    value={confirmPass}
                    placeholder="**** **** ****"
                    secureTextEntry={true}
                  />
                </View>
              </View>
              <View style={tw`flex flex-row items-center mx-5 h-56 mt-8 px-8`}>
                <View style={tw`w-full mb-4`}>
                  <TouchableHighlight
                    onPress={() => navigation.navigate("ChangePassSucces")}
                  >
                    <View style={tw`bg-[#32B768] rounded-xl py-5`}>
                      <Text
                        style={tw`text-white font-bold text-center text-lg`}
                      >
                        Reset Password
                      </Text>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}
