import React from 'react';
import {Subscription} from "./Subscription/Subscription";
import {Divider} from "semantic-ui-react";
import {SideBarHeader} from '../SideBarHeader/SideBarHeader';

export class Subscriptions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBarHeader title='Subscriptions'/>
        <Subscription label='MusicChannel' broadcasting/>
        <Subscription label='Jared Elder Studios' amountNewVideos={343}/>
        <Subscription label='Timmy' amountNewVideos={23}/>
        <Subscription label='Bilee' amountNewVideos={4}/>
        <Subscription label='Bob' amountNewVideos={114}/>
        <Divider/>
      </React.Fragment>
    );
  }
}