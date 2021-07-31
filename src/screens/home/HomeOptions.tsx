import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import optionsData from "../../data/homeOptionsData.json";
import { useStore } from "../../stores/store";
import { RootNavigationProp } from "../../types/navigation";

const NavOptions = () => {
  const { origin } = useStore().mapStore;
  const navigation = useNavigation<RootNavigationProp>();

  return (
    <FlatList
      data={optionsData}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.title}
      renderItem={({ item: { image, title, screen } }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate(screen)}
          disabled={!origin}
        >
          <View style={!origin && { opacity: 0.2 }}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Icon
              style={styles.icon}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default observer(NavOptions);

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
