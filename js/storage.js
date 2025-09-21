export function getItems() {
  const items = localStorage.getItem("basketItems");
  return items ? JSON.parse(items) : [];
}

export function setItems(items) {
  localStorage.setItem("basketItems", JSON.stringify(items));
}
