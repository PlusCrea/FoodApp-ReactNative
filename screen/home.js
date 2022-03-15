import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import React, { useState, useRef } from "react";
import tw from "twrnc";
//import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import Carousel, { Pagination } from "react-native-snap-carousel";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.75);
export const MENU_ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5);
//console.log(MENU_ITEM_WIDTH);

export default function Home({ navigation }) {
  const [search, setSearch] = useState("Search");
  const [offerIndex, setOfferIndex] = useState(0);
  const [menuIndex, setMenuIndex] = useState(0);
  const isCarousel = useRef(null);
  const offerdata = [
    {
      id: 1,
      url: require("../assets/imgs/FlashOffer1.png"),
    },
    {
      id: 2,
      url: require("../assets/imgs/FlashOffer2.png"),
    },
  ];
  const menudata = [
    {
      id: 1,
      name: "Chicken Biryani",
      desc: "Ambrosia Hotel & Restaurant",
      url: require("../assets/imgs/menu1.png"),
    },
    {
      id: 2,
      name: "Sauce Tonkatsu ",
      desc: "Handi Restaurant,Chittagong",
      url: require("../assets/imgs/menu2.png"),
    },
    {
      id: 3,
      name: "Chicken Katsu",
      desc: "Ambrosia Hotel & Restaurant",
      url: require("../assets/imgs/menu3.png"),
    },
  ];

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
  const renderOfferItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            //source={{ uri: item.url }}
            source={item.url}
            style={{ width: 280, height: 120 }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderMenuItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <View style={tw`p-2 bg-white rounded-xl`}>
          <View style={tw`self-center`}>
            <Image
              //source={{ uri: item.url }}
              source={item.url}
              //style={{ width: 168, height: 104 }}
              style={tw`w-42 h-28 rounded-t-lg`}
            />
            <Text style={tw`text-xl font-bold mt-2`}>{item.name}</Text>
            <View style={tw`flex flex-row  mt-2`}>
              <Ionicons name="location-sharp" size={16} color="#32B768" />
              <Text style={tw`text-sm text-gray-500 font-semibold`}>
                {item.desc}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderRestItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("RestDetail")}>
        <View style={tw`p-2 bg-white rounded-xl h-22 m-2`}>
          <View style={tw`flex flex-row`}>
            <View>
              <Image source={item.url} style={tw`w-18 h-18 rounded-lg`} />
            </View>
            <View style={tw`ml-2`}>
              <Text style={tw`text-xl font-bold `}>{item.name}</Text>
              <View style={tw`flex flex-row `}>
                <View style={tw`flex flex-row mt-1 w-3/5 mr-2 items-center`}>
                  <Ionicons name="location-sharp" size={24} color="#32B768" />
                  <Text style={tw`text-sm text-gray-500 font-semibold`}>
                    {item.desc}
                  </Text>
                </View>
                <View style={tw``}>
                  <TouchableHighlight>
                    <View style={tw`bg-[#32B768] rounded-xl py-3 px-6`}>
                      <Text style={tw`text-white font-bold text-center `}>
                        Book
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

  const onPressCarousel = () => {
    //this.refs.isCarousel.snapToNext();
    /*
    if (index == data.length - 1) {
      setIndex(0);
      console.log("2 oldu", index);
    } else setIndex(index + 1);
    console.log("Sonuc", index);
    */
  };
  return (
    <SafeAreaView style={tw`mt-6`}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={tw`h-full flex mx-1 justify-center`}>
          <View style={tw`flex flex-row justify-between items-center mx-4`}>
            <View style={tw``}>
              <Feather name="menu" size={24} color="black" />
            </View>
            <View style={tw`flex flex-row items-center`}>
              <Ionicons name="location-sharp" size={24} color="#32B768" />
              <Text style={tw`text-lg text-gray-500 font-semibold`}>
                Agrabad 435, Chittagong
              </Text>
            </View>
            <View style={tw``}>
              <Image
                source={require("../assets/imgs/user.png")}
                style={tw`my-2 rounded-full shadow-2xl`}
              />
            </View>
          </View>
          <View style={tw`flex items-center`}>
            <View
              style={tw`bg-gray-200 flex flex-row  w-3/4 h-12  rounded-2xl`}
            >
              <AntDesign
                style={tw`self-center ml-8`}
                name="search1"
                size={24}
                color="gray"
              />
              <TextInput
                style={tw` pl-4 text-gray-400 w-full `}
                onChangeText={setSearch}
                value={search}
              />
            </View>
          </View>
          <ScrollView>
            <View style={{ marginVertical: 10 }}>
              <Carousel
                layout={"default"}
                ref={isCarousel}
                data={offerdata}
                renderItem={renderOfferItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(offerIndex) => setOfferIndex(offerIndex)}
                useScrollView={true}
                autoplay={false}
                autoplayDelay={100}
                autoplayInterval={100}
                //loop={true}
              />
              <Pagination
                dotsLength={offerdata.length}
                activeDotIndex={offerIndex}
                carouselRef={isCarousel}
                dotStyle={{
                  width: 12,
                  height: 12,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: "#32B768",
                }}
                tappableDots={true}
                inactiveDotStyle={{
                  backgroundColor: "grey",
                  // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.8}
              />
            </View>
            <View style={tw`flex flex-row justify-between mb-4 mx-4`}>
              <View style={tw`flex `}>
                <Text style={tw`text-lg font-bold`}>Today New Arivable</Text>
                <Text style={tw`text-sm text-gray-500 font-semibold`}>
                  Best of the today food list update
                </Text>
              </View>
              <View style={tw`flex flex-row items-center`}>
                <Text style={tw`text-sm text-gray-500 font-semibold`}>
                  See All
                </Text>
                <AntDesign name="right" size={20} color="#6B7280" />
              </View>
            </View>
            <View style={tw``}>
              <Carousel
                layout={"default"}
                ref={isCarousel}
                data={menudata}
                renderItem={renderMenuItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={MENU_ITEM_WIDTH}
                onSnapToItem={(menuIndex) => setMenuIndex(menuIndex)}
              />
            </View>
            <View style={tw`flex flex-row justify-between mt-4  mx-4`}>
              <View style={tw`flex `}>
                <Text style={tw`text-lg font-bold`}>Explore Restaurant</Text>
                <Text style={tw`text-sm text-gray-500 font-semibold`}>
                  Check your city Near by Restaurant
                </Text>
              </View>
              <View style={tw`flex flex-row items-center`}>
                <Text style={tw`text-sm text-gray-500 font-semibold`}>
                  See All
                </Text>
                <AntDesign name="right" size={20} color="#6B7280" />
              </View>
            </View>
            <FlatList
              data={restdata}
              renderItem={renderRestItem}
              keyExtractor={(item) => item.id}
            />
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
