/**
 * Created by Administrator on 2017/8/11.
 */
/* @flow */

import {Tabs} from 'antd-mobile';
import React from 'react'
import NetCarousel from './recommendtab/firsttabcarousel'
import RecommendList from './recommendtab/recommendList'
import ExclusiveSend from './recommendtab/exclusiveSend'
import BroadcastTV from './recommendtab/broadcastTV'
import EspeciaColumn from './recommendtab/especiaColumn'
import LastestMusic from './recommendtab/lastestMusic'
import RecommendMV from './recommendtab/recommendMV'
import MusicType from './recommendtab/musicType'

import SongListHeader from './songlisttab/header'
import SongListCategory from './songlisttab/category'
import SongList from './songlisttab/songlist'
const TabPane = Tabs.TabPane

function callback(key) {
    console.log('onChange', key);
}
function handleTabClick(key) {
    console.log('onTabClick', key);
}

const DiscoveryTabs = ({actions, state}) => {
    return (<div className="discoverytab">
        <Tabs defaultActiveKey="2" animated={false} onChange={callback} onTabClick={handleTabClick}>
            <TabPane tab='个性推荐' key="1">
                <NetCarousel/>
                <MusicType/>
                <hr/>
                <RecommendList/>
                <ExclusiveSend/>
                <LastestMusic/>
                <RecommendMV/>
                <EspeciaColumn/>
                <BroadcastTV/>
            </TabPane>
            <TabPane tab='歌单' key="2">
                <SongListHeader/>
                <SongListCategory/>
                <SongList/>
            </TabPane>
            <TabPane tab='主播电台' key="3">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', backgroundColor: '#fff' }}>
                    Content of Third Tab
                </div>
            </TabPane>
            <TabPane tab='排行榜' key="4">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', backgroundColor: '#fff' }}>
                    Content of Third Tab
                </div>
            </TabPane>
        </Tabs>
    </div>)
}

export default DiscoveryTabs