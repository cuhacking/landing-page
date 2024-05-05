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
		<div className="navbar bg-base-100">
			<div className="flex-1">
      <a href="Logo">
		      <img src="../../Logo.svg" className={css(logoStyle)}></img>
		    </a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a>About</a>
					</li>
          <li>
						<a>Sponsors</a>
					</li>
          <li>
						<a>FAQ</a>
					</li>
          <li>
						<a>Join Us</a>
					</li>
				</ul>
			</div>
		</div>
		// <div className={css(navStyle)}>
		//   <div>
		//     <a href="">
		//       <img src="../../Logo.svg" className={css(logoStyle)}></img>
		//     </a>
		//   </div>

		//   <div>
		//     <a href="" className={[css(linkStyle), css(joinUsStyle)].join(" ")}>
		//       Join Us
		//     </a>
		//     <a href="" className={css(linkStyle)}>
		//       FAQ
		//     </a>
		//     <a href="" className={css(linkStyle)}>
		//       Sponsors
		//     </a>
		//     <a href="#about" className={css(linkStyle)}>
		//       About
		//     </a>
		//   </div>
		// </div>
	);
};
