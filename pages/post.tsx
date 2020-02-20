import { useRouter } from 'next/router'
// Router
    const PagePost = () => {
        const router = useRouter()
        console.log("DEBUG-CODE: PagePost -> router", router)
        return (
            <div>
              <h1>{router.query.title}</h1>
              <p>This is the blog post content.</p>
            </div>
        );
    }

export default PagePost