import ResourceHighlight from 'components/ResourceHighlight';
import ResourceList from 'components/ResourceList';
import Newsletter from 'components/Newsletter';
import Layout from 'components/Layout';

import {resources} from '../api/data';

export default function Home() {
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
