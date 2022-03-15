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
  Image,
} from "react-native";
import tw from "twrnc";

export default function Account({ navigation, createp }) {
  //console.log("create", navigation);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [create, setCreate] = useState(createp);

  return (
    <SafeAreaView style={tw`h-full bg-white flex `}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={tw`mx-8`}>
            <View style={tw`flex flex-row justify-between `}>
              <TouchableWithoutFeedback onPress={() => setCreate(true)}>
                <View>
                  <Text
                    style={tw`text-xl ${
                      create ? " text-[#32B768]" : "text-black/50"
                    }  font-semibold`}
                  >
                    Create Account
                  </Text>
                  {create ? (
                    <View
                      style={tw`border border-[#32B768] w-3/4 self-center mt-1`}
                    ></View>
                  ) : (
                    <View></View>
                  )}
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => setCreate(false)}>
                <View>
                  <Text
                    style={tw`text-xl  ${
                      !create ? " text-[#32B768]" : "text-black/50"
                    }  font-semibold`}
                  >
                    Login
                  </Text>
                  {!create ? (
                    <View
                      style={tw`border border-[#32B768] w-3/4 self-center mt-1`}
                    ></View>
                  ) : (
                    <View></View>
                  )}
                </View>
              </TouchableWithoutFeedback>
            </View>
            {create ? (
              <View>
                <View style={tw`mt-4`}>
                  <Text style={tw`ml-4 text-black font-bold text-lg mb-2`}>
                    Full Name
                  </Text>
                  <TextInput
                    style={tw`border border-black/30 rounded-xl h-15 pl-4`}
                    onChangeText={setName}
                    value={name}
                    placeholder="Enter your full name"
                  />
                </View>
                <View style={tw`mt-4`}>
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
                </View>
                <View style={tw`mt-4`}>
                  <Text style={tw`ml-4 text-black font-bold text-lg mb-2`}>
                    Password
                  </Text>
                  <TextInput
                    style={tw`border border-black/30 rounded-xl h-15 pl-4 pt-1`}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="**** **** ****"
                    secureTextEntry={true}
                  />
                </View>
                <View style={tw`flex items-center mx-5 h-auto mt-8`}>
                  <View style={tw`w-full mb-4`}>
                    <TouchableHighlight>
                      <View style={tw`bg-[#32B768] rounded-xl py-5`}>
                        <Text
                          style={tw`text-white font-bold text-center text-lg`}
                        >
                          Registration
                        </Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                  <View style={tw`w-full`}>
                    <TouchableHighlight>
                      <View
                        style={tw`bg-[#F4F4F4]  rounded-xl py-5 flex flex-row justify-center`}
                      >
                        <Image
                          style={tw`mt-1`}
                          source={require("../assets/imgs/ic_google.png")}
                        />
                        <Text
                          style={tw`text-black font-bold text-center text-lg ml-4`}
                        >
                          Sign up with Google
                        </Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            ) : (
              <View>
                <View style={tw`mt-4`}>
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
                </View>
                <View style={tw`mt-4`}>
                  <Text style={tw`ml-4 text-black font-bold text-lg mb-2`}>
                    Password
                  </Text>
                  <TextInput
                    style={tw`border border-black/30 rounded-xl h-15 pl-4 pt-1`}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="**** **** ****"
                    secureTextEntry={true}
                  />
                </View>
                <TouchableHighlight
                  onPress={() => navigation.navigate("Forgot")}
                >
                  <View style={tw``}>
                    <Text
                      style={tw`text-right mr-4 text-base font-bold mt-2 text-[#32B768]`}
                    >
                      Forget Password?
                    </Text>
                  </View>
                </TouchableHighlight>
                <View style={tw`flex items-center mx-5 h-auto mt-8`}>
                  <View style={tw`w-full mb-4`}>
                    <TouchableHighlight>
                      <View style={tw`bg-[#32B768] rounded-xl py-5`}>
                        <Text
                          style={tw`text-white font-bold text-center text-lg`}
                        >
                          Login
                        </Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                  <View style={tw`w-full`}>
                    <TouchableHighlight>
                      <View
                        style={tw`bg-[#F4F4F4]  rounded-xl py-5 flex flex-row justify-center`}
                      >
                        <Image
                          style={tw`mt-1`}
                          source={require("../assets/imgs/ic_google.png")}
                        />
                        <Text
                          style={tw`text-black font-bold text-center text-lg ml-4`}
                        >
                          Login with Google
                        </Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
