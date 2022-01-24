import classes from "./product-detail.module.css";
const ProductDetail = ({ selectedProduct }) => {
  const { title, description, price, image } = selectedProduct;
  return (
    <div className={classes.item}>
      <div className={classes.image}>
        <img src={image} alt={title} />
      </div>
      <div className={classes.content}>
        <h2>{title}</h2>
        <p>
          <strong>About this item:</strong> {description}
        </p>
        <span>Price: ${price}</span>
      </div>
    </div>
  );
};

export default ProductDetail;
