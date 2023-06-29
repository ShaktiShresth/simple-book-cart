const CartHead = () => {
  return (
    <div style={{ padding: "3% 0 0 0", textAlign: "center" }}>
      <div>
        <h3
          style={{
            color: "firebrick",
            textAlign: "center",
            letterSpacing: "1px",
          }}
        >
          Your Cart
        </h3>
        <code style={{ textAlign: "center" }}>
          The items you added to your cart
        </code>
      </div>
    </div>
  );
};

export default CartHead;
