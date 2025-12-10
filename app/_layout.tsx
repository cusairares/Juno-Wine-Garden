import { Stack } from "expo-router";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="(footer)" options={{ headerShown: false }} />
      </Stack>
    </CartProvider>
  );
}
