import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"
const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          voluptas illo voluptatibus aspernatur iste unde totam aut quis quasi.
          Facilis expedita quos a quisquam obcaecati?
        </p>
      </div>
    </Layout>
  )
}

export default blog
