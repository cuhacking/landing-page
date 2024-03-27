import { useStyletron } from "baseui";

const navStyle = {
    // display: "inline"
    // backgroundColor: "#333",
    overflow: "hidden",
};

const linkStyle = {
    float: "right",
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    textDecoration: "none",
    padding: "2px",
    width: "110px",
    height: "30px",
    // display: "block",
    // padding: "8px",
    borderRadius: "15px",
    backgroundColor: "#C5DFF8",
    opacity: "0.51",
    margin: "15px",
}

const joinUsStyle = {
    backgroundColor: "#FF789A",
    color: "white",
}

const leftLinkStyle = {
    float: "left",
    opacity: "0.8",
    width: "110px",
    height: "30px",
    margin: "15px",
}

const logoStyle = {
    height: "45px"
}

export const NavBar = () => {
    const [css, _$theme] = useStyletron();

    return (
        <div className={css(navStyle)}>
            <a 
                href=""
                className={css(leftLinkStyle)}
            >
                <img src="../../public/Logo.svg" className={css(logoStyle)}></img>
            </a>
            <a 
                href=""
                className={[css(linkStyle), css(joinUsStyle)].join(" ")}
            >
                Join Us
            </a>
            <a 
                href=""
                className={css(linkStyle)}
            >
                FAQ
            </a>
            <a 
                href=""
                className={css(linkStyle)}
            >
                Sponsors
            </a>
            <a 
                href=""
                className={css(linkStyle)}
            >
                About
            </a>
        </div>
    )
}