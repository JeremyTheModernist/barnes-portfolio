import React from 'react';

class ScrollToTop extends React.Component{
  componentDidMount(){
    window.scrollTo(0,0);
    console.log('WE BE SCROLLING YALL');
  }
  render(){
    return(
      this.props.children
    )
  }
}


export default ScrollToTop;
