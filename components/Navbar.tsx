import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  const links = [
    { href: '/', title: 'Home' },
    { href: '/3dcard', title: '3dcard' },
    { href: '/InfiniteMovingCards', title: 'InfiniteMovingCards'},
    { href: '/TracingBeam', title: 'TracingBeam' },
    { href: '/EvervaultCard', title: 'Evervault Card' },
    { href: '/GitHubGlobe', title: 'GitHub Globe'},
  ]

  return (
    <ul className="w-full flex justify-center gap-3 mb-3 underline">
      {links.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Navbar