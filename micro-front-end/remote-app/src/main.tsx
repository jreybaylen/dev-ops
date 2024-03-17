import React from 'react'
import ReactDOM from 'react-dom/client'

import { Root } from './pages/Root'

const HTML_ELEMENT = document.getElementById('root') as HTMLDivElement

ReactDOM.createRoot(HTML_ELEMENT).render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>
)
