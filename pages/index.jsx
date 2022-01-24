import ProductList from "../components/products";
import { getAllProducts } from "../helpers/api-util";

export default function Home({ products }) {
  return <ProductList items={products} />;
}

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products: products,
    },
    revalidate: 60,
  };
}
