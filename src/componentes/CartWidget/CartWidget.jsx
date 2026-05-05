import { useCart } from "../../context/CartContext";

function CartWidget() {
  const { getCartQuantity } = useCart();

  const totalItems = getCartQuantity();

  return (
    <span>
      🛒 {totalItems > 0 && <strong>{totalItems}</strong>}
    </span>
  );
}

export default CartWidget;
