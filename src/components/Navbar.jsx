import React from 'react'
import {Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@heroui/react"

function NavbarArea() {
  return (
    <>
        <Navbar shouldHideOnScroll isBlurred={false} className='w-full' maxWidth='xl'>
        <NavbarBrand>
        <div className='w-26'>
        <img src="logo.png" alt="" />
        </div>
        </NavbarBrand>

        <NavbarContent justify='end'>
            <NavbarItem>
                <Button as={Link} color='primary' variant='bordered' radius='full'>
                    Contact
                </Button>
            </NavbarItem>
        </NavbarContent>
        </Navbar>
    </>
  )
}

export default NavbarArea;