<script>
  import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Icon,
  } from "sveltestrap";
</script>

<div>
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">Bihan's Blog</NavbarBrand>
    <Nav class="ms-auto" navbar>
      <NavItem>
        <NavLink href="https://github.com/bihanviranga">Github</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" />
      </NavItem>
    </Nav>
  </Navbar>
</div>
