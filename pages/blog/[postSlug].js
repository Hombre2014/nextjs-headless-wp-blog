import Head from 'next/head';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { getSinglePost, getPostSlugs } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = await getSinglePost(params.postSlug);

  let featureImageUrl = "http://nextjs-headless-wp-blog.local/wp-content/uploads/2023/05/about02.png";

  if (postData.featuredImage) {
    featureImageUrl = postData.featuredImage.node.mediaDetails.sizes[0].sourceUrl;
  }

  return {
    props: {
      postData,
      featureImageUrl: "url(" + featureImageUrl + ")",
    },
  };
}

export async function getStaticPaths() {
  const postSlugs = await getPostSlugs();

  return {
    paths: postSlugs.map((s) => (
      {
        params: {
          postSlug: s.slug
        }
      }
    )),
    fallback: false
  };
}

export default function Post({ postData, featureImageUrl }) {
  return (
    <>
      <Head>
        <title key="pageTitle">{postData.title}</title>
        <meta name="description" content={postData.excerpt} key="metaDescription" />
      </Head>
      <section className='bg-slate-700 bg-opacity-70 absolute w-full z-20'>
        <SiteHeader className='header-single-post z-10' />
      </section>
      <article>
        <section className='hero-area h-[60vh] min-h-[30rem] bg-no-repeat bg-cover bg-center relative' style={{ backgroundImage: featureImageUrl }}>
          <div className='absolute inset-0 bg-slate-900 opacity-40'></div>
          <div className='container h-full flex flex-col justify-center lg:max-w-4xl mx-auto'>
            <h1 className='text-6xl text-center relative z-10 py-8 mt-12 text-slate-100'>{postData.title}</h1>
            <div dangerouslySetInnerHTML={{
              __html: postData.excerpt
            }} className='relative z-10 text-left text-slate-200 text-2xl pl-4 border-l-4 border-lime-200' />
          </div>
        </section>
        <section className='content-area- py-8'>
          <div dangerouslySetInnerHTML={{
            __html: postData.content
          }} className='w-full post-content container mx-auto lg:max-w-4xl' />
        </section>
      </article>
      <SiteFooter />
    </>
  );
}
