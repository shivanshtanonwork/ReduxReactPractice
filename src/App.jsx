import './App.css'
import { store } from './app/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  )
}

export default App
