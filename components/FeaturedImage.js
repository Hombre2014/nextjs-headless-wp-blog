import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedImage({ post }) {
  let img = '';

  const defaultFeaturedImage = "http://nextjs-headless-wp-blog.local/wp-content/uploads/2023/05/about02.png";
  const defaultWidth = "300";
  const defaultHeight = "200";

  if (post.featuredImage) {
    let size = post.featuredImage.node.mediaDetails.sizes[0];
    img = {
      src: size.sourceUrl,
      width: size.width,
      height: size.height
    }
  } else {
    img = {
      src: defaultFeaturedImage,
      width: defaultWidth,
      height: defaultHeight
    }
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <Image src={img.src} width={img.width} height={img.height} alt={post.title} className='object-cover rounded-xl' />
    </Link>
  )
}
