import { Layout } from './components/layouts/layout';
import { PagePreview } from './components/ui/page-preview';
import { Writer } from './components/ui/writer';

function App() {
  return (
    <>
      <Layout.Header />
      <Layout.Container>
        <PagePreview />
        <Writer />
      </Layout.Container>
    </>
  );
}

export default App;
