import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { getDiscussions } from '~/services/test';

export type HomePageProps = {
  discussions: Array<string>;
};

const HomePage: NextPage<HomePageProps> = (props: HomePageProps) => {
  const { discussions } = props;
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
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (context) => {
  const a = await getDiscussions();
  return {
    props: {
      discussions: [''],
    }, // will be passed to the page component as props
  };
};

export default HomePage;
