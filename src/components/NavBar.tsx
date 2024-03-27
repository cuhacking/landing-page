import { useStyletron } from "baseui";

const navStyle = {
	position: "fixed",
	zIndex: "100",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	width: "100%",
	height: "70px",
	paddingRight: "10px",
};

const linkStyle = {
	float: "right",
	color: "black",
	fontWeight: "bold",
	textAlign: "center",
	textDecoration: "none",
	padding: "2px 20px",
	borderRadius: "15px",
	backgroundColor: "var(--background-light-blue)",
	marginRight: "15px",
};

const joinUsStyle = {
	backgroundColor: "var(--text-pink)",
	color: "var(--text-white)",
};

const logoStyle = {
	height: "40px",
	marginLeft: "15px",
};

export const NavBar = () => {
	const [css, _$theme] = useStyletron();

	return (
		<div className={css(navStyle)}>
			<div>
				<a href="">
					<img src="../../public/Logo.svg" className={css(logoStyle)}></img>
				</a>
			</div>

			<div>
				<a href="" className={[css(linkStyle), css(joinUsStyle)].join(" ")}>
					Join Us
				</a>
				<a href="" className={css(linkStyle)}>
					FAQ
				</a>
				<a href="" className={css(linkStyle)}>
					Sponsors
				</a>
				<a href="" className={css(linkStyle)}>
					About
				</a>
			</div>
		</div>
	);
};
