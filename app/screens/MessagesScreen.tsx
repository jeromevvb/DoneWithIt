import React, { useState } from "react";
import { View, StyleSheet, FlatList, ImageURISource } from "react-native";

import SafeView from "../components/SafeView";
import {
  ListItemAction,
  ListItemSeparator,
  ListItem,
} from "../components/lists";

interface MessageProps {
  id: number;
  title: string;
  description: string;
  image: ImageURISource;
}

const data: MessageProps[] = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/avatar.jpg"),
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac imperdiet turpis, egestas commodo ante. Nulla elementum suscipit justo sit amet feugiat. Nulla pulvinar maximus sollicitudin. Vivamus lobortis, eros eget mollis mollis, risus sem ornare erat, a viverra mi libero ut leo. Praesent aliquet ac arcu non cursus. Cras eget posuere mi, eu suscipit ipsum. Ut fringilla at justo dictum ultrices. Nulla lobortis augue eu nunc commodo porta. Praesent vitae turpis elementum, hendrerit tellus eget, efficitur magna. Nulla id volutpat magna.",
    description:
      "Nam condimentum lorem eros, eu interdum lorem condimentum vel. Phasellus congue, augue eget varius placerat, nisi elit laoreet nisl, ut molestie dolor tortor vitae tellus. Etiam vestibulum justo in eros aliquet pretium ut eu lorem. Nullam sit amet molestie purus. Donec vestibulum non augue eu viverra. Sed pulvinar rutrum risus. Aenean placerat odio in metus volutpat egestas.",
    image: require("../assets/avatar.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(data);
  const [refresh, setRefresh] = useState(false);

  const onDelete = (item: MessageProps) => {
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

export default MessagesScreen;
