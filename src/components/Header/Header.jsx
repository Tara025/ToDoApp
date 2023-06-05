import styles from "./Header.module.scss";

const Header = () => {

const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.rem",
    color: "#aeadad",
    textAlign: "center",
}
    return (
<div style={headerStyle} className={styles.header}>
    <h1 >Todo-App-Header</h1>
    <p>Wir bauen ein einfaches 1. REACT Projekt</p>
</div>



    )
}

export default Header;