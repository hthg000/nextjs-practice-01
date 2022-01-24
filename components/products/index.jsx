import Link from "next/link";
import classes from "./products.module.css";
const ProductList = ({ items }) => {
  return (
    <div className={classes.list}>
      {items.map((product) => {
        const { id, title, price, image } = product;
        return (
          <div className={classes.item} key={id}>
            <img src={image} alt={title} />
            <div className={classes.content}>
              <div className={classes.title}>
                <Link href={`${id}`}>
                  <h2>{title}</h2>
                </Link>
              </div>
              <span>Price: ${price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
