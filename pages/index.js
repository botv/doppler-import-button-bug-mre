import Head from 'next/head'
import DopplerImportButton from "@dopplerhq/universal-import-react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>doppler-import-button-bug-mre</title>
      </Head>

      <main>
        <DopplerImportButton secretName="secret_name" secretValue="secret_value" />
      </main>
    </div>
  )
}
