declare module '@feature-x/ButtonBase' {
    export interface ButtonBaseProps {
        label: string
        onClick: () => void
    }

    export function ButtonBase(props: ButtonBaseProps): JSX.Element;
}
