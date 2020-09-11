import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import SafeView from "../components/SafeView";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My listing",
    icon: {
      name: "format-list-bulleted",
      bgColor: colors.primary,
    },
  },
  {
    title: "My messages",
    icon: {
      name: "email",
      bgColor: colors.secondary,
    },
  },
];

const MyAccountScreen = (props) => {
  return (
    <SafeView bgColor={colors.light}>
      <View style={styles.container}>
        <ListItem
          avatar={require("../assets/avatar.jpg")}
          title="Jerome VVB"
          subtitle="jeromevvb@gmail.com"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          scrollEnabled={false}
          data={menuItems}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => {
            return (
              <ListItem
                title={item.title}
                IconComponent={<Icon {...item.icon} />}
              />
            );
          }}
          keyExtractor={(item) => item.title}
        />
      </View>
      <ListItem
        IconComponent={<Icon name="email" bgColor={"#ffe66d"} />}
        title="Log out"
      />
    </SafeView>
  );
};

MyAccountScreen.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default MyAccountScreen;
