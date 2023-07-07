import { useState } from "react";
import classes from "./Header.module.css";
import CartIcon from "./CartIcon.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function HeaderMenu(props) {
  const { itemCount } = useSelector((state) => ({
    itemCount: state.cartFunctional.totalCount,
  }));
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar {...props}>
      <NavbarBrand href="/">My electronica</NavbarBrand>
      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/">Головна</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about/">Про нас</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/indian0ch">GitHub</NavLink>
          </NavItem>
          {/* <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
        </Nav>
        <Link className={classes["cart-button"]} to="/cart">
          <span className={classes["cart-icon"]}>
            <CartIcon />
          </span>
          <span>Кошик</span>
          <span className={classes["cart-badge"]}>{itemCount}</span>
        </Link>
      </Collapse>
    </Navbar>
  );
}
export default HeaderMenu;
