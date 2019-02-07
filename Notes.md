Firstly I imported the file system plugin and the transformer (Remark), and consequently added to the gatsby config file. We declared that remark should use the gatsby source file system from a path.

The next important point is that we moved on to gatsby-node file where we are grabbing all of our pages and using the create page function from the API. We're running a query to grab our blog posts and having it available as `res.data`. Important to note here is that `res.data.allMarkdownRemark.edges` is an array of all of our pages which we are iterating over and creating a path and a component which is my `postTemplate` (a template).

Now, in our individual template we are creating a query `BlogPostByPath` that takes a path as an argument, find a specific markdown file where the `frontmatter` path is equal (`eq`) to `$path`, then we are using GraphQl to request the html as well as the frontmatter path and title. 

Next, we simply have a react component which is a functional stateless component which we're pulling out a blog post from data.markdownRemark and returning a div with the title and innerHTML