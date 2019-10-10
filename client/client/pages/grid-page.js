import React from 'react'
import Layout from '../components/layout'
import Grid from '../components/grid'


export default function GridPage (props) {
    return (
        <Layout>
      <div>
          
        <p>This is the grid page</p>
        <Grid subscribers={props.subscribers}/>
      </div>
      </Layout>
    );
  }

  GridPage.getInitialProps = async function() {
    const res = await fetch('http://localhost:3000/subscribers');
    const data = await res.json();
      console.log(data)
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
      subscribers: data.map(subscriber => subscriber)
    };
  };