import Image from 'next/image';
import React from 'react'
import PostCard from '../../ec-web/components/Post'
import aPost from '../../ec-web/components/Post/aPost';
import StrapiClient from '../../../ec-web/lib/strapi-client'

const client = new StrapiClient();

export const getStaticProps = async => {
    const Post = client.fetchData(`/posts/${post._id}`);
    return {
        props: {
            postData: Post
        }
    }
}

export const Post = ({ postData }) => {
    return (
        <div className='page-container' key={post._id} post={postData}>
            <aPost key={post._id} post={post}/>
        </div>
    )
}