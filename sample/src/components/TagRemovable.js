import React, { Component } from 'react'
import * as Blueprint from "@blueprintjs/core";

const { Tag, Intent, Classes } = Blueprint

class RemovableTag extends Component {

  constructor() {
    super()
    this.state = {
      showTag: true
    }
    this.renderTag = this.renderTag.bind(this)
    this.deleteTag = this.deleteTag.bind(this)
  }

  renderTag() {
    if (this.state.showTag) {
      return <Tag className={Classes.MINIMAL} intent={Intent.PRIMARY} onRemove={this.deleteTag}>Minimal and removable</Tag>;
        } else {
            return undefined;
        }
  }

  deleteTag () {
    this.setState({ showTag: false });
  }

  render () {
    return (
      <div>
       {this.renderTag()}
     </div>
    )
  }

}

export default RemovableTag
