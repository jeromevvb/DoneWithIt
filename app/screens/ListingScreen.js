import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";
import SafeView from "../components/SafeView";
import colors from "../config/colors";

const data = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great conditions",
    price: 299,
    image: require("../assets/couch.jpg"),
  },
];

const ListingScreen = ({ navigation }) => {
  const handlePress = (item) => {
    navigation.navigate("ListingDetails", item);
  };

  return (
    <SafeView padding bgColor={colors.light}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={`$${item.price}`}
            onPress={() => handlePress(item)}
            {...item}
          />
        )}
      />
    </SafeView>
  );
};

const styles = StyleSheet.create({});

export default ListingScreen;
