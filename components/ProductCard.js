export default function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="imageWrapper">
        {product.badge && (
          <span className="badge">{product.badge}</span>
        )}

        {product.outOfStock && (
          <span className="badge out">OUT OF STOCK</span>
        )}

        <img
            src={product.image}
            alt={`Buy ${product.name} online at best price`}
        />
      </div>

      <h3>{product.name}</h3>
      <p>Sign in or Create an account to see pricing</p>
    </div>
  );
}
