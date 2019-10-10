import React from 'react'
import Layout from '../components/layout'
import Subscribers from '../components/subscribers'


export default function SubscribersPage (props) {
    const { subscribers } = props
    console.log(subscribers)
    return (
        <Layout>
      <div>
      <h1>Subscribers List</h1>
      <Subscribers subscribers={props.subscribers}/>
      </div>
      </Layout>
    );
  }

  SubscribersPage.getInitialProps = async function() {
    const res = await fetch('http://localhost:3000/subscribers');
    const data = await res.json();
      console.log(data)
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
      subscribers: data.map(subscriber => subscriber)
    };
  };