import React from "react";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import HomeScreen from "./screens/HomeScreen";

const surahData = [
  {
    title: "Al-Fatiha",
    number: 1,
    desc: "The Opening",
    arabicTitle: "الفاتحة",
  },
  {
    title: "Al-Baqarah",
    number: 2,
    desc: "The Cow",
    arabicTitle: "البقرة",
  },
  {
    title: "Al-Imran",
    number: 3,
    desc: "The Family of Imran",
    arabicTitle: "آل عمران",
  },
  {
    title: "An-Nisa",
    number: 4,
    desc: "The Women",
    arabicTitle: "النساء",
  },
  {
    title: "Al-Ma'idah",
    number: 5,
    desc: "The Table Spread",
    arabicTitle: "المائدة",
  },
  {
    title: "Al-An'am",
    number: 6,
    desc: "The Cattle",
    arabicTitle: "الأنعام",
  },
  {
    title: "Al-A'raf",
    number: 7,
    desc: "The Heights",
    arabicTitle: "الأعراف",
  },
  {
    title: "Al-Anfal",
    number: 8,
    desc: "The Spoils of War",
    arabicTitle: "الأنفال",
  },
  {
    title: "At-Tawbah",
    number: 9,
    desc: "The Repentance",
    arabicTitle: "التوبة",
  },
  {
    title: "Yunus",
    number: 10,
    desc: "Jonah",
    arabicTitle: "يونس",
  },
  // Add more surahs as needed
];

const juzzData = [
  {
    title: "Juzz 1",
    number: 1,
    desc: "First Juzz",
    arabicTitle: "الجزء الأول",
  },
  {
    title: "Juzz 2",
    number: 2,
    desc: "Second Juzz",
    arabicTitle: "الجزء الثاني",
  },
  {
    title: "Juzz 3",
    number: 3,
    desc: "Third Juzz",
    arabicTitle: "الجزء الثالث",
  },
  {
    title: "Juzz 4",
    number: 4,
    desc: "Fourth Juzz",
    arabicTitle: "الجزء الرابع",
  },
  {
    title: "Juzz 5",
    number: 5,
    desc: "Fifth Juzz",
    arabicTitle: "الجزء الخامس",
  },
  {
    title: "Juzz 6",
    number: 6,
    desc: "Sixth Juzz",
    arabicTitle: "الجزء السادس",
  },
  {
    title: "Juzz 7",
    number: 7,
    desc: "Seventh Juzz",
    arabicTitle: "الجزء السابع",
  },
  {
    title: "Juzz 8",
    number: 8,
    desc: "Eighth Juzz",
    arabicTitle: "الجزء الثامن",
  },
  {
    title: "Juzz 9",
    number: 9,
    desc: "Ninth Juzz",
    arabicTitle: "الجزء التاسع",
  },
  {
    title: "Juzz 10",
    number: 10,
    desc: "Tenth Juzz",
    arabicTitle: "الجزء العاشر",
  },
  // Add more juzzs as needed
];

// Main App component
export default function App() {
  return (
    <NavigationContainer>
      {" "}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: "Home" }}
          initialParams={{ surahData, juzzData }} // Pass the props here
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
