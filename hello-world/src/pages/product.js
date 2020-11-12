import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../components/product.module.css"
import Image from "gatsby-image"
import {Link} from 'gatsby'
const product = ({ data }) => {
  const {allContentfulProduct:{nodes:products}} = data
  return <Layout>
    <section className={styles.page}>
      {
        
        products.map((product) => {
          return (
            <div className={styles.product}>
              <div className={styles.productTop}>
                <h2 key={product.id}>{product.title}</h2>
                <article>
                <Image fluid={product.image.fluid} alt={product.title}>
             
                </Image>
                </article>
              </div>
              <div className={styles.productBottom}>
                <span>Price: {product.price}</span>

                <Link className={styles.Link} to={`/products/${product.slug}`}>More details</Link>

              </div>
            </div>
          )
      })
      }
    </section>
  </Layout>
}
export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default product