import Link from 'next/link'
import Image from "next/image"
import { Menu } from "./style"
import home from '../../assets/icons/home.svg'
import puzzle from '../../assets/icons/puzzle.svg'


const SideBar = () => {
  return (
    <Menu>
        <Link href={'/home'}>
        <Image src={home} width={30} height={30}/>
        </Link>
        <Link href={'/library'}>
        <Image src={puzzle} width={30} height={30}/>
        </Link>
    </Menu>
  )
}

export default SideBar