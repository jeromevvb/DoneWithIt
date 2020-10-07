import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../components/Text";
import { ListItem } from "../components/lists";
import CachedImage from "../components/CachedImage";
import colors from "../config/colors";
import routes, { RootStackParamList } from "../navigation/routes";
import { RouteProp } from "@react-navigation/native";

interface ListingDetailsScreenProps {
  route: RouteProp<RootStackParamList, routes.LISTING_DETAILS>;
}

const ListingDetailsScreen: React.FC<ListingDetailsScreenProps> = ({
  route,
}) => {
  const listing = route.params;

  return (
    <View>
      <CachedImage
        uri={listing.images[0].url}
        preview={listing.images[0].thumbnailUrl}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text>{listing.title}</Text>
        <Text color="secondary">${listing.price}</Text>
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
