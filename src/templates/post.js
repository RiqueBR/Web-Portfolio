import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';


export default function Template({data}){
const {markdownRemark: post} = data;

// The above syntax is the same as:
// const post = data.markdownRemark;

    return (
        <Layout>
        <div>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
        </Layout>
    )
}

// GraphQL query function that takes one argument (path) and it has to match a string
//  
export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
     markdownRemark(frontmatter: { path: { eq: $path }}){
        html
        frontmatter{
            path
            title
        }
      }   
    }
`