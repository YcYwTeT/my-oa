
import React, { Component } from 'react';
import './index.scss'
import Swiper from 'swiper'

const SlideItem = (props) => {
    return (
        <div className="swiper-slide">
            <img width="100%" src={props.slide}/>
        </div>
    )
}

class HomeBaner extends Component{
    constructor(props){
        super(props)
        this.state = {
            billboards: []
        }
        this.getBillboards = this.getBillboards.bind(this)
        this.renderSlides = this.renderSlides.bind(this)
    }
    getBillboards(){
      this.$http.get('/mz/v4/api/billboard/home',{
        params: {
            _t: Date.now()
        }
      }).then(res => {
          console.log(res.data.data.billboards)
          this.setState({billboards: res.data.data.billboards})
      })
    }
    componentDidMount(){
        this.getBillboards()
    }
    componentDidUpdate(){
        if(!this.swiper){
            this.swiper = new Swiper(this.el,{
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        }
    }
    renderSlides(){
        return this.state.billboards.map(item => {
            return <SlideItem slide={item.imageUrl} key={item.id}></SlideItem>
        })
    }
    render(){
        let { billboards } = this.state;
        return (
            <div className="swiper-container" ref={el => this.el = el}>
                <div className="swiper-wrapper">
                    { this.renderSlides() }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}

export default HomeBaner;