import Image from "next/image";
import styles from "./header.module.sass"

const Header = () => (
    <header class={`pt-60 pb-60 ${styles.header} mb-30`}>
        <div className={`container ${styles.headerContainer}`}>
            <Image src="/devyoulogowhite.svg" width='200' height='100' />
            <h1 className={styles.heading}>Blog</h1>
        </div>
        
    </header>
);

// const Header = () => (
//     <header className={styles.header}>
//         <nav className={styles.nav}>
//             <div class="navbar">
//                 <div className={styles.logo}>
//                     <img src="/devyoulogowhite.svg" alt="Logo" />
//                 </div>
//                 <div class={styles.menu_toggle}  onclick={toggleMenu()}>
//                     {/* <!-- <span class="bar"></span>
//                     <span class="bar middle"></span>
//                     <span class="bar"></span> --> */}
//                     <img src="/hamburgermenu.png"/>
//                 </div>
//                 <div class={styles.menu}>
//                     <ul>
//                         <li><a href="#">Home</a></li>
//                         <li><a href="#">About</a></li>
//                         <li><a href="#">Services</a></li>
//                         <li><a href="#">Contact</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     </header>
// );


function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show');
  }


export default Header;