import { useTheme } from "../context/ThemeContext";
import styles from "./Header.module.css";
const Header = () => {

const {toggleTheme, theme} = useTheme()


  return (
    <>
      <header className={styles.wrapper}>
        <div className={styles.header__top}>
          <span className={styles.first}>
            <a href="screen-reader.html" className={styles.accessibilityLink}>
              Screen Reader
            </a>
            <span style={{color:'#fff',paddingLeft:'20px'}}>|</span>
          </span>
          <span className={styles.languageSelect}>
            <select className={styles.languageDropdown}>
              <option>English</option>
              <option>Hindi</option>
            </select>
            <span style={{color:'#fff',paddingLeft:'20px'}}>|</span> 
          </span>
          <span className={styles.fontSizeSelect}>
            <select className={styles.fontSizeDropdown}>
              <option>A-</option>
              <option selected>A</option>
              <option>A+</option>
            </select>
            <span style={{color:'#fff',paddingLeft:'20px'}}>|</span>
          </span>
          <span className={styles.darkModeToggle}>
            <div className={styles.toggleContainer}>
              <input  type="checkbox" id="toggle" onChange={toggleTheme} checked={theme==='dark'} />
              <label htmlFor="toggle"></label>
              <span style={{paddingTop:'5px', color:'#212529'}}>Light/Dark Mode</span>
            </div>
          </span>
        </div>

        
      </header>
      
    </>
  );
};

export default Header;
