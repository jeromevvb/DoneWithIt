import React from "react";
import {
  View,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

// type : 'opacity' | 'highlight' | 'none'

const touchablesComponents = {
  opacity: TouchableOpacity,
  highlight: TouchableOpacity,
  none: TouchableOpacity,
};

const Touchable = ({ onPress, children, type = "opacity", ...restProps }) => {
  if (!onPress) return <View {...restProps}>{children}</View>;

  const Component = touchablesComponents[type];

  return (
    <Component onPress={onPress} {...restProps}>
      {children}
    </Component>
  );
};

Touchable.defaultProps = {};

export default Touchable;
