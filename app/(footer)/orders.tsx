import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Order, useCart } from "../context/CartContext";

const Orders = () => {
  const { orders } = useCart();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "#FFA500";
      case "Processing":
        return "#1E90FF";
      case "Shipped":
        return "#8A2BE2";
      case "Delivered":
        return "#32CD32";
      default:
        return "#808080";
    }
  };

  const renderOrderItem = ({ item }: { item: Order }) => (
    <View style={styles.orderContainer}>
      <View style={styles.orderHeader}>
        <Text style={styles.orderDate}>
          {new Date(item.date).toLocaleDateString()}{" "}
          {new Date(item.date).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
        <Text style={styles.orderTotal}>{item.total.toFixed(2)} RON</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text
          style={[styles.statusText, { color: getStatusColor(item.status) }]}
        >
          Status: {item.status}
        </Text>
      </View>
      <View style={styles.divider} />
      {item.items.map((cartItem) => (
        <View key={cartItem.id} style={styles.itemRow}>
          <Text style={styles.itemQuantity}>{cartItem.quantity}x</Text>
          <Text style={styles.itemName}>{cartItem.name}</Text>
          <Text style={styles.itemPrice}>
            {(cartItem.price * cartItem.quantity).toFixed(2)} RON
          </Text>
        </View>
      ))}
    </View>
  );

  if (orders.length === 0) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.emptyText}>No past orders found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Orders</Text>
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 20,
    color: "#555",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  orderContainer: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  orderDate: {
    fontSize: 16,
    color: "#555",
    fontWeight: "600",
  },
  orderTotal: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4D827E",
  },
  statusContainer: {
    marginBottom: 10,
  },
  statusText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  itemQuantity: {
    fontSize: 16,
    fontWeight: "bold",
    width: 30,
  },
  itemName: {
    fontSize: 16,
    flex: 1,
  },
  itemPrice: {
    fontSize: 16,
    color: "#888",
  },
});

export default Orders;
