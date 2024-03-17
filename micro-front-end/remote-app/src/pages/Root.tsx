import { useCallback, useState } from 'react'

import { ButtonBase } from '../components/Button/Base'

export function Root(): JSX.Element {
    const [ COUNT, setCount ] = useState(0)

    const handleOnClick = useCallback(() => {
        setCount(
            (count) => count + 1
        )
    }, [])

    return (
        <div>
            <ButtonBase
                label="Increment"
                onClick={ handleOnClick }
            />
            <p>Current Number: { COUNT }</p>
        </div>
    )
}
