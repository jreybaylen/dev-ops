import styles from './Base.module.css'

type ButtonBaseType = {
    label: string
    onClick: () => void
}

export function ButtonBase(props: ButtonBaseType): JSX.Element {
    return (
        <button
            type="button"
            onClick={ props.onClick }
            className={ styles['base-container'] }
        >
            { props.label }
        </button>
    )
}
