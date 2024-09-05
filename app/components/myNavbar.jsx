import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import NavButton from "@/app/components/NavButton"
export default function MyNavbar(props) {
  return (
    <Navbar color="foreground" className="bg-black text-white">
      <NavbarBrand>
      <Link color="foreground" href="/" className="font-bold text-white">
            I&apos;m Fanny
          </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 text-white" justify="center">
      <NavbarItem>
          <NavButton href="/sobreMi" text="Sobre mí"  />
        </NavbarItem>
        <NavbarItem >
          <NavButton href="/contacto" text="Contacto"  />
          </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
