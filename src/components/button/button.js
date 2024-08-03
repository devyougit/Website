import styles from './button.module.sass'
import Link from 'next/link'

export const IconTypes = {
    ARROW_RIGHT: 'ARROW_RIGHT',
}

const Button = (props) => {
    if (props.href) {
        return (
            <Link className={styles.button} href={props.href}>
                {props.children}
                <Button.Icon iconType={props.icon} />
            </Link>
        )
    }
    return <button className={styles.button}>{props.children}</button>
};




Button.Icon = ({ iconType }) => {
    if (iconType === 'ARROW_RIGHT'){
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="0.95rem" height="0.95rem" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path fill="currentColor" fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
            </svg>
        )
    }
    return null;
}

Button.Icon.displayName = 'Icon'

export default Button