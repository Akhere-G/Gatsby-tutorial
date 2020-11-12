import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import styles from "../components/productTemplate.module.css"
export const  getProduct = graphql`
  query GetSingleProduct($slug: String){
    product:contentfulProduct(slug: {eq: $slug}) {
      title
      price
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      info {
        info
      }
    }
  }
`

const ProductTemplate= ({ data }) => {
  const {product:{title, price, image:{fluid}, info:{info}}} = useStaticQuery(getProduct)
  return (
   <Layout>
     <div className={styles.product}>
       <div className={styles.productTop}>
       <article>
         <Image fluid={fluid}></Image>
       </article>
       <div className={styles.productRight}>
          <h1>{title} - {price}</h1>
          <p>{info}</p>
       </div>

       </div>
       
       <div className={styles.productBottom}>
         <Link to="/product">Return</Link>
       </div>
     </div>
   </Layout>


)}

export default ProductTemplate

