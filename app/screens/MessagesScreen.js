import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import SafeView from "../components/SafeView";
import {
  ListItemAction,
  ListItemSeparator,
  ListItem,
} from "../components/lists";

const data = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/avatar.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/avatar.jpg"),
  },
];

const MessagesScreen = (props) => {
  const [messages, setMessages] = useState(data);
  const [refresh, setRefresh] = useState(false);

  const onDelete = (item) => {
    // waiting to connect to server
    setMessages(messages.filter((m) => m.id !== item.id));
  };

  return (
    <SafeView>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        refreshing={refresh}
        onRefresh={() =>
          setMessages((oldState) => [
            ...oldState,
            {
              id: 3,
              title: "T3",
              description: "D3",
              image: require("../assets/avatar.jpg"),
            },
          ])
        }
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            avatar={item.image}
            onPress={() => console.log(item)}
            rightActions={() => {
              return (
                <ListItemAction
                  action="delete"
                  onPress={() => onDelete(item)}
                />
              );
            }}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </SafeView>
  );
};

MessagesScreen.defaultProps = {};

const styles = StyleSheet.create({});

export default MessagesScreen;
