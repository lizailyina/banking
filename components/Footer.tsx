import { signOut } from '@/lib/actions/user.actions';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
  const router = useRouter();

  const handleSignOut = async () => {
    const loggedOut = await signOut();
    
    if (loggedOut) router.push('/sign-in');
  }

  return (
    <footer className='footer'>
      <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name text-gray-700'}>
        <p className='text-xl font-bold text-grey-700'>
          {user.name[0]}
        </p>
      </div>

      <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email text-gray-700'}>
        <h1 className='text-14 truncate font-semibold text-grey-700'>
          {user.name}
        </h1>
        <p className='text-14 truncate font-normal text-grey-600'>
          {user.email}
        </p>
      </div>

      <div className='footer_image' onClick={handleSignOut}>
        <Image src={'/icons/logout.svg'} fill alt="logout" />
      </div>
    </footer>
  )
}

export default Footer