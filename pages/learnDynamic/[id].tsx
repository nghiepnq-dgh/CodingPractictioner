import React from 'react';
import { useRouter } from 'next/router';

//When creating the dynamic route we added id between the brackets ([]). 
//This is the name of the query param received by the page, so for /p/hello-nextjs the query object will have { id: 'hello-nextjs'}, 
//and we can access it with useRouter().


const Dynamic = () => {
    const router = useRouter();
    console.log("DEBUG-CODE: Dynamic -> router.query", router.query)
    return (
        <div>
            <h1>{router.query.id}</h1>
            <p>This is the blog post content.</p>
        </div>
    );
};

export default Dynamic;