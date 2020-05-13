import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Button = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity onPressOut={onPress}>
      <AntDesign name={iconName} size={80} color="white" />
    </TouchableOpacity>
  );
};

Button.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
