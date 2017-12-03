/**
 * Created by Vestein Dahl
 * Date: 03.12.2017
 * Time: 19.19
 */

import React, {Component} from 'react';
import './flex_layout.css';
import Content from "./Content";

class Page extends Component {

  render() {
    return (
        <div className="vd_container_main">
          <Content/>
        </div>
    )
  }

}

export default Page;
