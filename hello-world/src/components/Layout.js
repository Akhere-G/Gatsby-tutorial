import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "./Layout.module.css"

const layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default layout
