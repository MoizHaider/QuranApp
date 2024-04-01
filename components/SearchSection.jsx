import React, { useState } from "react";
import { View, TextInput, FlatList, Text } from "react-native";

const SearchComponent = ({ data, setData, surah }) => {
  const [searchText, setSearchText] = useState("");

  // Function to filter data based on search text
  const handleSearch = (text) => {
    setSearchText(text);
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          padding: 4,
          borderRadius: 10,
        }}
        onChangeText={handleSearch}
        value={searchText}
        placeholder={`${surah ? "Search Surah..." : "Search Juzz...."}`}
      />
    </View>
  );
};

export default SearchComponent;
