import React from "react";
import { View, StyleSheet, Image } from "react-native";
import SafeView from "../components/SafeView";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = (props) => {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />

      <View style={styles.content}>
        <AppText>Red Jacket for sale</AppText>
        <AppText color="secondary">$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            avatar={require("../assets/avatar.jpg")}
            title="Jerome VVB"
            subtitle="5 listings"
          />
        </View>
      </View>
    </View>
  );
};

ListingDetailsScreen.defaultProps = {};

const styles = StyleSheet.create({
  view: {},
  content: {
    padding: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
  image: {
    height: 300,
    width: "100%",
  },
});

export default ListingDetailsScreen;
