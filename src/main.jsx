import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router} from 'react-router-dom'
import Productprovider from './context/filter.jsx'
import Productswapprovider from './context/productswap.jsx'
import LikesProvider from './context/likescontext.jsx'
import AuthProvider from './context/authcontext.jsx'
import ErrorBoundary from './components/erorb.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
<Router>
<ErrorBoundary>
      <AuthProvider> 

     <Productprovider>
     <LikesProvider>
     <Productswapprovider>
          <App />
     </Productswapprovider>
     </LikesProvider>
     </Productprovider>
      </AuthProvider> 
</ErrorBoundary>
</Router>
    
  
)
