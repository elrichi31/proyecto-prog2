import '../styles/globals.css'
import Navbar from './Components/Navbar'
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
      
      <Component {...pageProps}>
        <Navbar></Navbar>
      </Component>
    </div>
  )
}

export default MyApp
