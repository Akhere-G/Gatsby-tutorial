const path = require('path')
//create pages dynamically
exports.createPages = async ({graphql, actions}
  ) => {
  const {createPage} = actions
  const results = await graphql(`
  query GetProducts  {
    products:allContentfulProduct{
      nodes {
        slug
      }
    }
  }  
  `)
  results.data.products.nodes.forEach((product) => {
    createPage({
      path: `/products/${product.slug}`,
      component: path.resolve(`src/templates/productTemplate.js`),
      context: {slug:product.slug},
    })
  })
}