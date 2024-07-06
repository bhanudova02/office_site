import Head from "next/head";

interface NextHeadObj {
  title: string;
  description: string;
  url: string
}

export const NextHead = ({ title, description, url }: NextHeadObj) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:URL" content={url} />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  )
}