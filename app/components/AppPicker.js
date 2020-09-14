import React, { Fragment, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../config/theme";
import AppText from "./AppText";
import SafeView from "./SafeView";
import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  items,
  onSelectItem = () => {},
  selectedItem,
  placeholder,
}) => {
  const [visibleModal, setModalVisible] = useState(false);

  return (
    <Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={theme.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={theme.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visibleModal} animationType="slide">
        <SafeView>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                selected={
                  selectedItem ? selectedItem.value === item.value : false
                }
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </SafeView>
      </Modal>
    </Fragment>
  );
};
// selected={selectedItem.value === item.value}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 25,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
