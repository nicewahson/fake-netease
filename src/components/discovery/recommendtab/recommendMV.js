/**
 * Created by Administrator on 2017/8/11.
 */
/* @flow */

import React, {Component} from 'react'
import hoc from '../../../redux/wrapcomponent'

//推荐MV
@hoc({id: 'recommendMV', url: ''})
class RecommendMV extends Component {
    state = {
        list : [1,2,3,4,5,6]
    }
    render() {
        let list = this.state.list.map((item, index) => (<div className="recommendListItem" key={index}><span>{item}</span></div>))
        return (<div className="recommendList">
            <p className="recommendListTitle">推荐MV{' '}></p>
            <div className="recommendListpic">
                {list}
            </div>
        </div>)
    }
}
export default RecommendMV