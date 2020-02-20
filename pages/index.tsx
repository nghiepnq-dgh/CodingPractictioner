

import * as React from "react";
import Link from "next/link";
import { NextPageContext } from "next";

export interface IHomeProps {
  userAgent?: string;
}

//Link defaute
export const  PostLink = (props: any)=> {
 return  <ul>
      <li>
        <Link href= {`/post?title=${props.title}`}>
          <a>{props.title}</a>
        </Link>
      </li>
    </ul>
}

// Dynamic
export const PostLinkDynamic = (props: any) => (
  <ul>
      <li>
        <Link href= "/learnDynamic/[id]" as= {`/learnDynamic/${props.id}`} >
          <a>{props.id}</a>
        </Link>
      </li>
  </ul>
)


export default class Home extends React.Component<IHomeProps> {
  static async getInitialProps({ req }: NextPageContext) {
    console.log("DEBUG-CODE: Home -> getInitialProps -> req", req?.headers)
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent };
  }



  public render() {
    const { userAgent } = this.props;
    return (
      <div>
        <Link href="/about" as="page-about">
          <a>About page</a>
        </Link>
        <h1>{userAgent}</h1>
        <br/>
        <PostLink title="dog"/>
        <PostLink title="cat"/>
        <PostLink title="macos"/>

        {/* Dynamic */}
        <PostLinkDynamic id={10}/>
        <PostLinkDynamic id={200}/>
      </div>
    );
  }
}
