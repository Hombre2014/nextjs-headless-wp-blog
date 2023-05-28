import Link from 'next/link';

export default function SiteFooter() {
  return (
    <>
      <footer id='site-footer' className='bg-slate-200'>
        <div className='flex justify-between items-center container mx-auto lg:max-w-5xl'>
          <div className='py-3'>
            &copy; 2022-2023 CoolNomad Travel Blog
          </div>
          <ul className='flex [&>li>a]:px-2'>
            <li className='inline-block px-2'>
              <Link href='/about'>About</Link>
            </li>
            <li className='inline-block px-2'>
              <Link href='/privacy-policy'>Privacy policy</Link>
            </li>
            <li className='inline-block px-2'>
              <Link href='/sample-page'>Sample page</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
