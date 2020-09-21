import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import SafeView from "../components/SafeView";
import colors from "../config/colors";
import Icon from "../components/Icon";
import { ListItemSeparator, ListItem } from "../components/lists";
import routes from "../navigation/routes";
import useAuth from "../hooks/useAuth";

const menuItems = [
  {
    title: "My listing",
    route: routes.MY_LISTING,
    icon: {
      name: "format-list-bulleted",
      bgColor: colors.primary,
    },
  },
  {
    title: "My messages",
    route: routes.MESSAGES,
    icon: {
      name: "email",
      bgColor: colors.secondary,
    },
  },
];

const MyAccountScreen = ({ navigation }) => {
  const { user, logout } = useAuth();

  return (
    <SafeView bgColor={colors.light}>
      <View style={styles.container}>
        <ListItem
          avatar={require("../assets/avatar.jpg")}
          title={user.name}
          subtitle={user.email}
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
                onPress={() => navigation.navigate(item.route)}
                showChevron
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
        onPress={logout}
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
