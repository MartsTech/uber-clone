import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import { ScreenNavigationProp } from "../../types/navigation";
import navData from "../../data/navData.json";

const NavOptions = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <FlatList
      data={navData}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.title}
      renderItem={({ item: { image, title, screen } }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate(screen)}
        >
          <>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Icon
              style={styles.icon}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  item: {
    paddingLeft: 24,
    paddingRight: 8,
    paddingBottom: 32,
    paddingTop: 16,
    backgroundColor: "#E5E7EB",
    margin: 8,
    width: 160,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  title: {
    marginTop: 8,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "bold",
  },
  icon: {
    padding: 8,
    backgroundColor: "black",
    borderRadius: 9999,
    width: 40,
    marginTop: 16,
  },
});
