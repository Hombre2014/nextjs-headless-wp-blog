import { useState } from 'react';
import { getPostList } from '@/lib/posts';

export default function LoadMore({ posts, setPosts, taxonomy = null }) {

  const [buttonText, setButtonText] = useState('Load more posts');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleOnClick = async (event) => {

    setButtonText('Loading...');
    setButtonDisabled(true);

    const morePosts = await getPostList(posts.pageInfo.endCursor, taxonomy);
    const updatedPosts = {
      pageInfo: {},
      nodes: []
    }

    updatedPosts.pageInfo = morePosts.pageInfo;

    posts.nodes.map((node) => {
      updatedPosts.nodes.push(node);
    });

    morePosts.nodes.map((node) => {
      updatedPosts.nodes.push(node);
    });

    setPosts(updatedPosts);

    if (morePosts.pageInfo.hasNextPage) {
      setButtonText('Load more posts');
      setButtonDisabled(false);
    } else {
      setButtonText('No more posts');
      setButtonDisabled(true);
    }
  }

  return (
    <div className='py-4 text-center'>
      <button
        className='load-more font-bold bg-blue-400 text-slate-900 px-4 py-2 hover:bg-blue-500'
        onClick={handleOnClick}
        disabled={posts.pageInfo.hasNextPage ? buttonDisabled : true}
      >
        {posts.pageInfo.hasNextPage ? buttonText : 'No more posts'}
      </button>
    </div>
  )
}