import React, { Component } from 'react'
import * as Blueprint from "@blueprintjs/core";
import './Tag.css'

const { Tag, Intent } = Blueprint

 class TagExample extends Component {
   render () {
     return (
      <div>
         <Tag className='tag pt-large' intent={Intent.DEFAULT} onRemove={this.deleteTag}>Default</Tag>
         <Tag className='tag pt-large pt-round' intent={Intent.DANGER} onRemove={this.deleteTag}>Round</Tag>
         <Tag className='tag' intent={Intent.SUCCESS} onRemove={this.deleteTag}>Success</Tag>
         <Tag className='tag' intent={Intent.PRIMARY} onRemove={this.deleteTag}>Done</Tag>
      </div>
     )
   }
 }

export default TagExample
