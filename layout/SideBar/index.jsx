import Link from 'next/link'
import { cloneElement } from 'react'
import { IconWrap, Menu } from "./style"
import { HomeIcon, PuzzleIcon, FightIcon, GroupChat, AwardsIcon} from '../../components/icons'
import { useRouter } from 'next/router'


const SideBar = () => {
  const router = useRouter()

  const menuItems = [
    {
      id: 1,
      path: '/',
      icon: <HomeIcon/>
    },
    {
      id: 2,
      path: '/library',
      icon: <PuzzleIcon/>
    },
    {
      id: 3,
      path: '/challenge',
      icon: <FightIcon/>
    },
    {
      id: 4,
      path: '/group',
      icon: <GroupChat/>
    },
    {
      id: 5,
      path: '/awards',
      icon: <AwardsIcon/>
    }
  ]

  function checkActive (path){
    path = path.split('/').slice(1)[0]
    const routePath = router.pathname.split('/').slice(1)[0]
    return routePath == path
  }

  return (
    <Menu>
      {
        menuItems.map(item => (
            <Link key={item.id} href={item.path}>
              <IconWrap style={{['boxShadow']: checkActive(item.path) && " 0px 4px 8px rgba(255, 255, 255, 0.1)"}}>
                {cloneElement(item.icon, {color: checkActive(item.path) ? '#2F7DFF' : '#585B71'})}
              </IconWrap>
            </Link>
        ))
      }
    </Menu>
  )
}

export default SideBar