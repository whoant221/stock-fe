import React from 'react'
//Layout
import Header from '../components/Header/index';
import MusicControl from '../components/MusicControl/index';
import PlayerBar from '../components/PlayerBar/index';
import SidebarRight from './SidebarRight';
import SidebarLeft from './SidebarLeft';


function Layout() {
  return (
    <div>
        <Header/>
        <MusicControl/>
        <SidebarLeft/>
        
        <PlayerBar/>
        <SidebarRight/>
        
    </div>
  )
}

export default Layout