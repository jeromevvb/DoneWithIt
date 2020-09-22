import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import listingsApi from "../api/listings";
import Card from "../components/Card";
import Fetch from "../components/Fetch";
import SafeView from "../components/SafeView";
import colors from "../config/colors";
import routes from "../navigation/routes";

const ListingScreen = ({ navigation }) => {
  const handlePress = (item) => {
    navigation.navigate(routes.LISTING_DETAILS, item);
  };

  return (
    <Fetch apiRequest={listingsApi.getListings}>
      {(data) => (
        <SafeView padding bgColor={colors.light}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View key={item.id} style={styles.container}>
                <Card
                  title={item.title}
                  subtitle={`$${item.price}`}
                  image={item.images[0]}
                  onPress={() => handlePress(item)}
                />
              </View>
            )}
          />
        </SafeView>
      )}
    </Fetch>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default ListingScreen;
