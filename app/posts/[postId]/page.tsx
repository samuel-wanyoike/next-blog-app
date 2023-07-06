import { getSortedPostsData, getPostData } from '@/lib/posts'
import React from 'react'
import { notFound } from "next/navigation"
import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';

//generate static params to convert page from ssr to ssg
export function generateStaticParams(){
    const posts = getSortedPostsData();

    return posts.map((post) => ({
        postId: post.id
    }))

}


//generate metadata function

export function generateMetadata({params}: {params: {postId: string}}) {

    const posts = getSortedPostsData(); //deduped
    const { postId } = params;

    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }
    return {
        title: post.title,
    }
}

//post component
export default async function Post({params}: {params: {postId: string}}) {

    const posts = getSortedPostsData(); //deduped
    const { postId } = params;

    if (!posts.find(post => post.id === postId)){
        return notFound()
    }

    const {title, date, contentHtml } = await getPostData(postId)
    
    const pubDate = getFormattedDate(date)

    return (
        <main className='px-6 prose prose-xl prose-slate prose-invert mx-auto'>
            <h1 className='text-3xl mt-4 mb-0 text-black'>{title}</h1>
            <p className='mt-0 text-white'>{pubDate}</p>
            <article className='text-white'>
                <section dangerouslySetInnerHTML={{__html: contentHtml}}/>
                <p>
                    <Link href='/'> Back to Home</Link>
                </p>
            </article>
        </main>
  )
}
