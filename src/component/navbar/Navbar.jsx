import React, { useState } from 'react';
import Links from './Links';
import { Menu, X } from 'lucide-react';

const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "Services",
    children: [
      { id: 21, name: "Web Development", path: "/services/web" },
      { id: 22, name: "App Development", path: "/services/app" },
      { id: 23, name: "SEO", path: "/services/seo" }
    ]
  },
  {
    id: 3,
    name: "Products",
    children: [
      { id: 31, name: "Laptops", path: "/products/laptops" },
      { id: 32, name: "Mobiles", path: "/products/mobiles" },
      { id: 33, name: "Accessories", path: "/products/accessories" }
    ]
  },
  {
    id: 4,
    name: "About",
    path: "/about"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];

const navLinks = navItems.map(route=><Links key={route.id} route={route}></Links>)

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='mx-auto w-11/12 my-4 flex items-center justify-between'>
            <span className='flex gap-2' onClick={()=>setOpen(!open)}>
            {open? <X className="md:hidden"></X> : <Menu className="md:hidden"></Menu>}
                <ul className='md:hidden absolute top-14'>
                    {
                        navLinks
                    }
                </ul>
                <h3>My Navbar</h3>
            </span>
            {/* system 3 */}

            <ul className='hidden md:flex gap-4'>
                {
                    navLinks
                }
            </ul>

            {/* System 2 */}

            {/* <ul className='flex gap-4'>
                {
                    navItems.map(route => <li key={route.id}> <a href={route.path}></a>{route.name}</li>)
                }
            </ul> */}

                {/* System 1 */}
            {/* <ul className='flex gap-4'>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contract</a></li>
            </ul> */}
            <button className='btn btn-primary'>Sign In</button>
        </nav>

        // <div className="navbar bg-base-100 shadow-sm">
        //   <div className="navbar-start">
        //     <div className="dropdown">
        //       <div
        //         tabIndex={0}
        //         role="button"
        //         className="btn btn-ghost lg:hidden"
        //       >
        //         <svg
        //           xmlns="http://www.w3.org/2000/svg"
        //           className="h-5 w-5"
        //           fill="none"
        //           viewBox="0 0 24 24"
        //           stroke="currentColor"
        //         >
        //           {" "}
        //           <path
        //             strokeLinecap="round"
        //             strokeLinejoin="round"
        //             strokeWidth="2"
        //             d="M4 6h16M4 12h8m-8 6h16"
        //           />{" "}
        //         </svg>
        //       </div>
        //       <ul
        //         tabIndex="-1"
        //         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        //       >
        //         <li>
        //           <a>Item 1</a>
        //         </li>
        //         <li>
        //           <a>Parent</a>
        //           <ul className="p-2">
        //             <li>
        //               <a>Submenu 1</a>
        //             </li>
        //             <li>
        //               <a>Submenu 2</a>
        //             </li>
        //           </ul>
        //         </li>
        //         <li>
        //           <a>Item 3</a>
        //         </li>
        //       </ul>
        //     </div>
        //     <a className="btn btn-ghost text-xl">daisyUI</a>
        //   </div>
        //   <div className="navbar-center hidden lg:flex">
        //     <ul className="menu menu-horizontal px-1">
        //       <li>
        //         <a>Item 1</a>
        //       </li>
        //       <li>
        //         <details>
        //           <summary>Parent</summary>
        //           <ul className="p-2 bg-base-100 w-40 z-1">
        //             <li>
        //               <a>Submenu 1</a>
        //             </li>
        //             <li>
        //               <a>Submenu 2</a>
        //             </li>
        //           </ul>
        //         </details>
        //       </li>
        //       <li>
        //         <a>Item 3</a>
        //       </li>
        //     </ul>
        //   </div>
        //   <div className="navbar-end">
        //     <a className="btn">Button</a>
        //   </div>
        // </div>
    );
};

export default Navbar;