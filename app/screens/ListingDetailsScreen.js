import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "../components/Text";
import { ListItem } from "../components/lists";

const ListingDetailsScreen = (props) => {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />

      <View style={styles.content}>
        <Text>Red Jacket for sale</Text>
        <Text color="secondary">$100</Text>
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
