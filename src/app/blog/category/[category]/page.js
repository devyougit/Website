import Card from "../../../../components/card/card";
import Image from "next/image";
import { IconTypes } from "../../../../components/button/button";
import styles from './styles.module.sass'
import Link from "next/link";
import config from "../../../../config";
import fetchBlogs from "../../../../helpers/fetch-blogs";
import { notFound } from "next/navigation";

 
const BlogCategory = async (props)=> {
  const categories = ['Networking', 'Devops', 'Kubernetes'];
  if (categories.includes(props.params.category)==false){notFound()}
  const [featuredBlogs, blogs] = await Promise.all([
    await fetchBlogs(`filters[IsFeatured][$eq]=true&filters[Category][$eq]=${props.params.category}`),
    await fetchBlogs(`filters[IsFeatured][$eq]=false&filters[Category][$eq]=${props.params.category}`)
  ]) 
    return(
      <div className="container pb-80">
          <div className={`${styles.categoryMenu} mb-30 h4`}>
          <div className={styles.categoryOption} >
                  <Link className={styles.categoryOption} href='/blog'>All</Link>
              </div>
              <div className={styles.categoryOption}>
                  <Link className={styles.categoryOption} href="/blog/category/Networking">Networking</Link>
              </div>
              <div className={styles.categoryOption}>
                  <Link className={styles.categoryOption} href='/blog/category/Devops'>Devops</Link>
              </div>
              <div className={styles.categoryOption}>
                  <Link className={styles.categoryOption} href='/blog/category/Kubernetes'>Kubernetes</Link>
              </div>
          </div>

        {featuredBlogs.data.map(featuredBlog =>(
          <Card 
          key = {featuredBlog.attributes.id}
          label = {featuredBlog.attributes.Category}
          title = {featuredBlog.attributes.Title}
          summary = {featuredBlog.attributes.Summary}
          href = {`/blog/${featuredBlog.attributes.Slug}`}
          imgSrc = {`${config.api}${featuredBlog.attributes.FeaturedImage.data.attributes.url}`}
          imgAlt = "Featured Image"
          btnIcon = {IconTypes.ARROW_RIGHT}
          className = "mb-30"
          />
        ))}

        <div className="row">
        {blogs.data.map(blog =>(
          <div className="col col_4 m-mw-100" key = {blog.attributes.id}>
            <Card 
            label = {blog.attributes.Category}
            title = {blog.attributes.Title}
            summary = {blog.attributes.Summary}
            href = {`/blog/${blog.attributes.Slug}`}
            imgSrc = {`${config.api}${blog.attributes.Thumbnail.data.attributes.url}`}
            imgAlt = "Thumbnail Image"
            btnIcon = {IconTypes.ARROW_RIGHT}
            className = "mb-30"
            />
          </div>
        ))}
        </div>
      </div>
      
    );
}

export const generateStaticParams = async() => {
  const categories = ['Networking', 'Devops', 'Kubernetes'];

  return categories.map((category) =>({
      category: category,
  }))
}

export default BlogCategory;