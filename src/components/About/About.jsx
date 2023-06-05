import styles from "./About.module.scss";

function About() {
  return (
    <div className={styles.About}>
      About
      <p className = {styles.aboutText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo atque odio
        sapiente aperiam rem eius nam quos aut consequuntur repudiandae
        asperiores eos, quis cumque, a quasi tempore iure odit possimus.
      </p>
    </div>
  );
}

export default About;
