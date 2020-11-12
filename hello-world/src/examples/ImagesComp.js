import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image-2.jpeg"
import Image from "gatsby-image"
import styles from "./ImagesComp.module.css"

const getImages = graphql`
{
  fixed: file(relativePath: {eq: "image-2.jpeg"}) {
    childImageSharp {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid: file(relativePath: {eq: "image-2.jpeg"}) {
    childImageSharp {
      fluid(maxWidth: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}

`

const ImagesComp = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <section className={styles.images}>
      <article className={styles.singleImage}>
        <h3> basic image</h3>
        <img src={img} width="80%" alt=""/>
      </article>
      <article className={styles.singleImage}>
        <h3> fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed}></Image>
      </article>
      <article className={styles.singleImage}>
        <h3> fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid}></Image>
      </article>
    </section>
  )
}

export default ImagesComp
