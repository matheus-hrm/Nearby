import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { Image, Text, View } from "react-native";
import Step from "../step";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";

export default function Index() {
  return (
    <View
      style={{
        gap: 24,
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontFamily: fontFamily.regular,
          color: colors.gray[500],
        }}
      >
        Veja como funciona:
      </Text>
      <Step
        icon={IconMapPin}
        title="Encontre estabelecimentos"
        description="Veja locais perto de você que são parceiros Nearby"
      />

      <Step
        icon={IconQrcode}
        title="Ative o cupom com QR Code"
        description="Escaneie o código no estabelecimento para usar o benefício"
      />

      <Step
        icon={IconTicket}
        title="Garanta vantagens perto de você"
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimento"
      />
    </View>
  );
}
