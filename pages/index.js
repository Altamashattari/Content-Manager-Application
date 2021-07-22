import ResourceHighlight from 'components/ResourceHighlight';
import ResourceList from 'components/ResourceList';
import Newsletter from 'components/Newsletter';
import Layout from 'components/Layout';

export default function Home({resources}) {
  return (
    <>
      <Layout>
        <ResourceHighlight resources={resources.slice(0,2)} />
        <Newsletter />
        <ResourceList resources={resources.slice(2)}/>
      </Layout>
    </>
  )
}
// is called everytime you visit that page
// function is executed on the server
// data is always fresh
export const getServerSideProps = async () => {
  const resData = await fetch('http://localhost:3001/api/resources').then(data => data.json());
  return {
    props: {
      resources: resData,
    }
  }
};

/**
 * is called only at the build time, and it is called only once
 */
// export const getStaticProps = async () => {
//   console.log('Running getStaticProps() method');
//   return {
//     props: {
//       resources: data,
//     }
//   }
// };

/*
  Four different types of pages in Next.js
  - λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
  - ○  (Static)  automatically rendered as static HTML (uses no initial props)
  - ●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
  -    (ISR)     incremental static regeneration (uses revalidate in getStaticProps)

*/
