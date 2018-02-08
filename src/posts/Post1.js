import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import Post from '../components/Post/Post.js';

const title = 'Post 1';
const subtitle = 'Lorem ipsum dolor sit amet.';
const author = 'Bill Murray';
const date = '01/03/2017';
const content = `
## Live demo

Changes are automatically rendered as you type.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
`

class Post1 extends Component {
  render() {
    return (
      <React.Fragment>
        <Post 
          title={ title }
          subtitle={ subtitle }
          author={ author }
          date={ date }
        >
          <ReactMarkdown 
            htmlMode='raw'
            source={ content }
          />
        </Post>
      </React.Fragment>
    )
  }
}

export default Post1;