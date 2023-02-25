import { StyledAnchor } from "./StyledAnchor";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><StyledAnchor href='#home'>Home</StyledAnchor></li>
                    <li><StyledAnchor href='#experience'>Experience</StyledAnchor></li>
                    <li><StyledAnchor href='#projects'>Projects</StyledAnchor></li>
                    <li><StyledAnchor href='#contact'>Contact</StyledAnchor></li>
                </ul>
            </nav>
        </header>       
    )};

export default Header;