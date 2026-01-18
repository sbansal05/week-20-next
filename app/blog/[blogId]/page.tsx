export default async function BlogPage({
    params
}: {
    params: Promise<{ blogId: string | number }>
}) {
    const { blogId } = await params;

    return <div>
        Blog page {blogId}
    </div>
}