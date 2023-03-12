import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <main>
        <div className="mt-3 text-center">
          <h1 className="text-[3rem]">Hello world!</h1>
        </div>
      </main>
    </>
  );
}
