import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";
import SearchComponent from "../components/SearchSection";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function HomeScreen({ route }) {
  const { surahData, juzzData } = route.params;
  const [surah, setSurah] = useState(true);
  const [surahDataState, setSurahDataState] = useState(surahData);
  const [juzzDataState, setJuzzDataState] = useState(juzzData);
  const [lightMode, setLightMode] = useState(true);

  const toggleMode = () => {
    setLightMode((prevMode) => !prevMode);
  };

  const onSurahClick = () => {
    setSurah(true);
    setJuzzDataState(juzzData);
  };

  const onJuzzClick = () => {
    setSurah(false);
    setSurahDataState(surahData);
  };

  return (
    <View
      style={{ backgroundColor: lightMode ? "#ffffff" : "#000b0b", flex: 1 }}
    >
      <View style={{ alignItems: "flex-end", padding: 10 }}>
        <TouchableOpacity onPress={toggleMode}>
          <Text style={{ color: lightMode ? "#8420df" : "#ffffff" }}>
            {lightMode ? "Dark Mode" : "Light Mode"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text
          style={{ fontSize: 25, color: lightMode ? "#000000" : "#ffffff" }}
        >
          Reading {surah ? "Surah" : "Juzz"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
          }}
        >
          <TouchableOpacity
            style={{
              width: 80,
              height: 30,
              borderRadius: 10, // To make it a circle
              borderColor: "#8420df", // Border color
              borderWidth: 2, // Border width
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={onSurahClick}
          >
            <Text style={{ color: lightMode ? "#000000" : "#ffffff" }}>
              Surah
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onJuzzClick}
            style={{
              width: 80,
              height: 30,
              borderRadius: 10, // To make it a circle
              borderColor: "#8420df", // Border color
              borderWidth: 2, // Border width
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: lightMode ? "#000000" : "#ffffff" }}>
              Juzz
            </Text>
          </TouchableOpacity>
        </View>
        <SearchComponent
          data={surah ? surahData : juzzData}
          setData={surah ? setSurahDataState : setJuzzDataState}
          surah={surah}
        />
        <FlatList
          data={surah ? surahDataState : juzzDataState}
          renderItem={({ item }) => (
            <View
              style={{
                marginBottom: 10,
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
                flexDirection: "row",
                height: 40,
              }}
            >
              <View style={{ flex: 1, flexDirection: "row", gap: 6 }}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25, // To make it a circle
                    borderColor: "#8420df", // Border color
                    borderWidth: 2, // Border width
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 20, color: "#8420df" }}>
                    {item.number}
                  </Text>
                </View>

                <View style={{ flex: 0.7, flexDirection: "column" }}>
                  <View>
                    <Text
                      style={{
                        color: lightMode ? "#000000" : "#ffffff",
                        fontSize: 18,
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: "gray", fontSize: 18 }}>
                      {item.desc}
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flex: 0.3,
                  flexDirection: "column",
                  alignItems: "end",
                  padding: 10,
                }}
              >
                <View>
                  <Text
                    style={{
                      color: "lightgray",
                      fontSize: 18,
                      color: "#8420df",
                    }}
                  >
                    {item.arabicTitle}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
        <StatusBar style={lightMode ? "dark" : "light"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,

    paddingHorizontal: 15,
  },
});
