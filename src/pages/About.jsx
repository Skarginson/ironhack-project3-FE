import ulysseProfile from "../assets/ulysseProfile.jpg";
import projectImage from "../assets/logo-charitywise.png";
import linkedinLogo from "../assets/linkedin.png";
import githubLogo from "../assets/logo-github.png";
import styles from "../styles/About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <div className={styles.ulysse}>
          <img
            className={styles.picture}
            src={ulysseProfile}
            alt="photo of a very handsome guy if you ask me"
          />
          <h2 className={styles.name}>Ulysse Lafagne</h2>
          <p className={styles.aboutText}>
            Passionate about humanitarian causes, I regularly donate to several
            charities. However, I often find myself lost in my donations, not
            knowing where my money is going and how it is being used. That's why
            I wanted to create a tool that allows me to better organize my
            contributions and discover new organizations to support based on my
            income. This tool not only helps me see more clearly but also
            maximizes the impact of my donations.
          </p>
          <p className={styles.aboutLink}>
            <a
              href="https://www.linkedin.com/in/ulysse-lafagne-82555129a/"
              target="_blank"
            >
              <img
                className={styles.logo}
                src={linkedinLogo}
                alt="logo linkedin"
              />
            </a>
            <a href="https://github.com/Skarginson" target="_blank">
              <img className={styles.logo} src={githubLogo} alt="logo github" />
            </a>
          </p>
        </div>
        <div className={styles.aboutProject}>
          <img
            className={styles.projectImage}
            src={projectImage}
            alt="Image representing the project"
          />
          <p>
            Welcome to Charitywise, a donation management application designed
            for people who want to better track and optimize their charitable
            contributions. This project is the result of my final solo project
            in an intensive web development bootcamp. I designed this
            application as a personal tool but also to meet the needs of others
            who, like me, want to donate in a more structured and effective way.{" "}
            <br />
            Charitywise allows you to centralize all your donations, visualize
            the impact of your contributions, and discover new organizations
            that align with your values and financial capacity. I hope this
            application will be as useful to you as it is to me, and that it
            will encourage even more people to support causes they care about.
            Thank you for visiting and happy donation management!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
