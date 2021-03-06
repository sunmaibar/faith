import React from "react"
import FeatureProduct from "./FeatureProduct"
import Title from "../Globals/Title"
import { StaticQuery, graphql } from "gatsby"
const getProducts = graphql`
  {
    products: allContentfulFeatureProduct {
      edges {
        node {
          id
          title
          price
          description {
            description
          }
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const FeatureProducts = () => {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="熱銷商品" />
              <div className="row">
                {data.products.edges.map(({ node: product }) => {
                  return <FeatureProduct key={product.id} product={product} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
// good1
export default FeatureProducts
