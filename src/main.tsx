import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

import { Provider } from "react-redux"
import { QueryClient, QueryClientProvider } from "react-query"
import { configureStore } from "@reduxjs/toolkit"

import UserReducer from "./redux/UserReducer.ts"
import { BrowserRouter as Router} from "react-router-dom"

const store = configureStore({
  reducer :{
      users:UserReducer
  }
})
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Router>
      <App />
      </Router>
   
    </Provider>
    </QueryClientProvider>
   
  </React.StrictMode>,
)
