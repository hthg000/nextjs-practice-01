import Link from "next/link";
import classes from "./header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.nav}>
        <Link href="/">All Product</Link>
      </div>
    </header>
  );
};

export default Header;
