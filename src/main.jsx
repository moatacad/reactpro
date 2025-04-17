import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx'
import Bank from './Bank.jsx'
import { PostProvider } from './context/PostsContext.jsx'
import Invento from './Invento.jsx'
import { ProductProvider } from './context/ProductContext.jsx'

//The below is for blog
import Layout from './Blog/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <ProductProvider> */}
  {/* 
  <PostProvider>
    <App />
  </PostProvider> 
  */}
    {/* <App2 /> */}
    {/* <Bank/> */}
    {/* <Invento/> */}
    <Layout/>
    {/* </ProductProvider> */}
  </StrictMode>
)
