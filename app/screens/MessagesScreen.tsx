import React, { useState } from "react";
import { View, StyleSheet, FlatList, ImageURISource } from "react-native";

import SafeView from "../components/SafeView";
import {
  ListItemAction,
  ListItemSeparator,
  ListItem,
} from "../components/lists";
import MessageItem from "../components/MessageItem";
import { Message } from "../models/messages";
import Fetch from "../components/Fetch";
import messages from "../api/messages";

// const data: MessageProps[] = [
//   {
//     id: 1,
//     title: "T1",
//     description: "D1",
//     image: require("../assets/avatar.jpg"),
//   },
//   {
//     id: 2,
//     title:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac imperdiet turpis, egestas commodo ante. Nulla elementum suscipit justo sit amet feugiat. Nulla pulvinar maximus sollicitudin. Vivamus lobortis, eros eget mollis mollis, risus sem ornare erat, a viverra mi libero ut leo. Praesent aliquet ac arcu non cursus. Cras eget posuere mi, eu suscipit ipsum. Ut fringilla at justo dictum ultrices. Nulla lobortis augue eu nunc commodo porta. Praesent vitae turpis elementum, hendrerit tellus eget, efficitur magna. Nulla id volutpat magna.",
//     description:
//       "Nam condimentum lorem eros, eu interdum lorem condimentum vel. Phasellus congue, augue eget varius placerat, nisi elit laoreet nisl, ut molestie dolor tortor vitae tellus. Etiam vestibulum justo in eros aliquet pretium ut eu lorem. Nullam sit amet molestie purus. Donec vestibulum non augue eu viverra. Sed pulvinar rutrum risus. Aenean placerat odio in metus volutpat egestas.",
//     image: require("../assets/avatar.jpg"),
//   },
// ];

const MessagesScreen = () => {
  // const [messages, setMessages] = useState(data);
  const [refresh, setRefresh] = useState(false);

  const onDelete = (item: Message) => {
    // waiting to connect to server
    // setMessages(messages.filter((m) => m.id !== item.id));
  };

  return (
    <SafeView>
      <Fetch apiRequest={messages.getMessages}>
        {({ data, loading, request }) => (
          <FlatList
            data={data}
            keyExtractor={(message) => message.id.toString()}
            refreshing={loading}
            onRefresh={request}
            renderItem={({ item }: { item: Message }) => (
              <MessageItem message={item} onDelete={onDelete} />
            )}
            ItemSeparatorComponent={ListItemSeparator}
          />
        )}
      </Fetch>
    </SafeView>
  );
};

export default MessagesScreen;
