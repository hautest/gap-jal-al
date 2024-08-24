import { ExternalLink } from "@tamagui/lucide-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Anchor, H2, Paragraph, XStack, YStack } from "tamagui";

export default function TabOneScreen() {
  return (
    <YStack f={1} backgroundColor="$darkGray">
      <H2 fontFamily="$light" fontSize="$13" color="$ivory">
        갭잘알
      </H2>
    </YStack>
  );
}
