import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { IconProps } from "@tabler/icons-react-native";
import { View, Text } from "react-native";

type StepProps = {
  icon: React.ComponentType<IconProps>;
  title: string;
  description: string;
};

export default function Step({ icon: Icon, title, description }: StepProps) {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        gap: 16,
      }}
    >
      {Icon && <Icon size={32} color={colors.red.base} />}
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: fontFamily.semiBold,
            color: colors.gray[600],
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: fontFamily.regular,
            color: colors.gray[500],
            marginTop: 14,
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
}
