import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/Layout"
import {graphql} from "gatsby"
const examples = ({data}) => {
  const {site:{info:{author}}} = data
  return (
    <Layout>
      <p>this is an example</p>
      <Header></Header>
      <HeaderStatic/>
      <h5>author: {author}</h5>
    </Layout>
  )
}

//when you export a variable called data,
// a data field is made within the props
export const data = graphql`
query MyQuery{
  site{
    info:siteMetadata{
      person{
        age
        name
      }
      author
      data
      description
      title
    }
  }
}`
export default examples
