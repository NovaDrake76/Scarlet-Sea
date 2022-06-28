import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Navbar } from "../components/Navbar"


export default class MyDocument extends Document{
    render(){
        return(
          <Html>
              <Head>
           
              </Head>
             
              <body>
              <Navbar></Navbar>
                <Main />
                <NextScript/> 
              </body>
          </Html>
        )
    }
}