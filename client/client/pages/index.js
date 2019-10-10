import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../components/layout'
import Subscribers from '../components/subscribers'
import Grid from '../components/grid'
import fetch from 'isomorphic-unfetch'


const Index = props => {

    return (
        <>
        <Head>
            <title>agGrid Demo</title>
        </Head>

        <Layout>
            <Subscribers subscribers={props.subscribers}/>
            <Grid subscribers={props.subscribers}/>
        </Layout>
        </>
    )
}

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/subscribers');
  const data = await res.json();
    console.log(data)
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    subscribers: data.map(subscriber => subscriber)
  };
};

export default Index;