"use client"
import axios from "axios";
import { useEffect } from "react";


export default async function BlogPage({
    params
}: {
    params: Promise<{ blogId: string | number }>
}) {
    const { blogId } = await params;
    const postId = (await params).blogId
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = response.data

    return <div>
        Blog page {blogId}

        <br />
        title - {data.title}
        body - {data.body}
    </div>
}