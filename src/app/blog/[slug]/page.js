import getCategoryColor from "../../../helpers/get-category-color";
import Image from "next/image";
import styles from './styles.module.sass'
import fetchBlogs from "../../../helpers/fetch-blogs";
import config from "../../../config";
import { notFound } from "next/navigation";

const BlogDetail = async(props)=> {
    const blogs = await fetchBlogs(`filters[Slug][$eq]=${props.params.slug}`);
    if (blogs.data.length == 0) {notFound()}
    const blog = blogs.data[0]
    return (
    <div className="container pb-80">
        <div className="row mb-50">
            <div className="col col_9">
                <div className={`h6 mb-10 c-${getCategoryColor(blog.attributes.Category)}`}>{blog.attributes.Category}</div>
                <h2>{blog.attributes.Title}</h2>
            </div>
        </div>
        <Image className={`${styles.featuredImage} mb-50`} src = {`${config.api}${blog.attributes.FeaturedImage.data.attributes.url}`} alt="featured image" width='1280' height='520' />
        
        <div className="row mb-50">
            <div className="col col_9" dangerouslySetInnerHTML={{__html:blog.attributes.Content}}>
            </div>
        </div>

    </div>
    
    );
}


export const generateStaticParams = async() => {
    const blogs = await fetchBlogs();

    return blogs.data.map((post) =>({
        slug: post.attributes.Slug,
    }))

}

export default BlogDetail;