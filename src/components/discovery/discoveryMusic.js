/**
 * Created by Administrator on 2017/8/11.
 */
import React, {Component} from 'react'
import TopSearch from './topsearch'
import DiscoveryTabs from './discoverytabs'

class DiscoveryMusic extends Component {
    render() {
        return (<div>
            <TopSearch/>
            <DiscoveryTabs/>
        </div>)
    }
}

export default DiscoveryMusic
