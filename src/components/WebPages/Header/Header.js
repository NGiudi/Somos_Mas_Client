// import from react. 
import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// import from external libraries.
import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";

// import from local files.
import { BgColor, Button, Flex, HeaderBox, Li, MenuButtonWrapper, NavbarWrapper } from "./headerStyles";
import logo from "../../../assets/img/logo-somos-mas-blanco.png";
import AvatarMenu from "./Menus/AvatarMenu";

// import constants.
import { WHITE } from "../../../constants/colors";

function Header() {
	const { name } = useSelector(state => state.user);
	const [open, setOpen] = useState(false);

	const handleMenuHamburguer = () => setOpen(!open);

	return (
		<BgColor>
			<HeaderBox>
				{!open ? (
					<MenuButtonWrapper onClick={handleMenuHamburguer}>
						<HamburgerIcon w={7} h={7} color={ WHITE } />
					</MenuButtonWrapper>
				) : (
					<MenuButtonWrapper onClick={handleMenuHamburguer}>
						<SmallCloseIcon w={7} h={7} color={ WHITE } />
					</MenuButtonWrapper>
				)}
        
				<Flex>
					<Link to="/">
						<Image width={["70px", "120px"]} src={logo} alt="logo somos más" />
					</Link>
                
					<NavbarWrapper open={open}>
						<Li to="/news">Noticias</Li>
						<Li to="/activities">Actividades</Li>
						<Li to="/about-us">Nosotros</Li>
						<Li to="/contact">Contacto</Li>
					</NavbarWrapper>
				</Flex>
        
				{ /* UserProfile */
					name !== "" ? (<AvatarMenu />) : (<Button to="/login">Iniciar Sesión</Button>)
				}
        
			</HeaderBox>
		</BgColor>
	);
}

export default memo(Header);
