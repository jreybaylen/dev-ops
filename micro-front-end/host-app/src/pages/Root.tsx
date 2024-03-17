import { useCallback, useState } from 'react'

import { ButtonBase } from '@feature-x/ButtonBase'

export function Root(): JSX.Element {
    const [ COUNT, setCount ] = useState(0)

    const handleOnClick = useCallback(() => {
        setCount(
            (count) => count + 1
        )
    }, [])

    return (
        <div>
            <h1>Module Federation</h1>
            <ButtonBase
                label="Increment"
                onClick={ handleOnClick }
            />
            <p>Current Number: { COUNT }</p>
        </div>
    )
}
