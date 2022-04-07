import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"
import PropTypes from 'prop-types'

const Layout = ({ children, title}) => {
  return (
    <>
        <Head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
            <title> { title }  </title>
        </Head>
        <Header/>
            { children }
        <Footer/>
    </>
  )
}

export default Layout;

Layout.defaultProps = {
    title : 'Page name missing...'
}
Layout.propTypes = {
    title: PropTypes.string
}
