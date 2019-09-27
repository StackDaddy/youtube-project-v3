import React from 'react';
import SideBarItem from './SideBarItem/SideBarItem';
import {Menu, Divider} from 'semantic-ui-react';
import './SideBar.scss';
import {SideBarHeader} from './SideBarHeader/SideBarHeader';
import {Subscriptions} from './Subscriptions/Subscriptions';
import {SideBarFooter} from './SideBarFooter/SideBarFooter';

export class SideBar extends React.Component {
  constructor(){
    super()
    this.state = {
      open: false
    }
  }
  hamburger = () => {
    this.setState({
      open:!this.state.open    
    })
    console.log(this.state.open)
  }
  render() {
    return (
      <div>
        <button className="button show"onClick={this.hamburger}> open me</button>
        <Menu borderless vertical stackable fixed='left' className={`side-nav ${this.state.open}`}>
        <button className="button away"onClick={this.hamburger}> close me</button>
          <SideBarItem path='/' label='Home' icon='home'/>
          <SideBarItem path='/feed/trending' label='Trending' icon='fire'/>
          <SideBarItem label='Followers' icon='spy'/>
          <Divider/>
          <SideBarHeader title='Library'/>
          <SideBarItem label='History' icon='history'/>
          <SideBarItem label='Watch later' icon='clock'/>
          <SideBarItem label='Liked videos' icon='thumbs up'/>
          <Divider/>
          <Subscriptions/>
          <SideBarHeader title='More from JEtube'/>
          <SideBarItem label='Movies and Shows' icon='film'/>
          <Divider/>
          <SideBarItem label='Report history' icon='flag'/>
          <SideBarItem label='Help' icon='help circle'/>
          <SideBarItem label='Send feedback' icon='comment'/>
          <Divider/>
          <SideBarFooter/>
        </Menu>
     </div>
    );
  }
}
