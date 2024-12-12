import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { Image, Text, View } from "react-native";

export function Welcome() {
  return (
    <View>
      <Image
        source={require("@/assets/logo.png")}
        style={{
          width: 48,
          height: 48,
          marginTop: 24,
          marginBottom: 28,
        }}
      />
      <Text
        style={{
          fontSize: 24,
          fontFamily: fontFamily.bold,
          color: colors.gray["600"],
        }}
      >
        Boas vindas ao nearby
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontFamily: fontFamily.regular,
          color: colors.gray["500"],
          marginTop: 12,
        }}
      >
        Tenha cupons de vantagem
      </Text>
    </View>
  );
}
