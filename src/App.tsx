import React, { FC } from 'react'
import './style/tailwind.output.css'
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const App: FC = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default App
