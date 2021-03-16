import './shared/css/Global.css'

import { Navigation } from './components/navigation/Navigation';
import { Routes } from './routes/Routes';
import { UserProvider } from './shared/providers/UserProvider'

const App = () => {
	return (
		<div className="wrapper">
			<UserProvider>
				<Routes>
					<Navigation />
				</Routes>
			</UserProvider>
		</div>
	)
}
export default App
