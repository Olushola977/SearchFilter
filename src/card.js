import React, { Component } from 'react';
import Data from "./data";


class Card extends Component {
    constructor() {
        super();

        this.state = {
            search: null
        };
        this.searchSpace=(event)=>{
            let keyword = event.target.value;
            this.setState({search:keyword})
          }
    }
    render() {

        const items = Data.filter((data)=>{
            if(this.state.search == null)
                return data
            else if(data.role.toLowerCase().includes(this.state.search.toLowerCase()) || data.location.toLowerCase().includes(this.state.search.toLowerCase()) || data.level.toLowerCase().includes(this.state.search.toLowerCase())){
                return data
            }
           
        }).map(data => {
            return (
                <section className="pt-3" key={data.id}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contain">
                                    <div className="p-3 mt-3 mb-2 bg-white rounded box">
                                        <div className="row">
                                            <div className="col-lg-1 my-auto">
                                                <div className="img">
                                                    <img src={data.logo} alt="" className="img-fluid" />
                                                </div>
                                            </div>

                                            <div className="col-lg-4 my-auto">
                                                <div className="tag">
                                                    <span className="t-style mr-1">{data.company}</span>
                                                    {data.new && <span className="txt-style rounded-pill py-1 px-2 bg-color mr-1">New</span>}
                                                    {data.featured && <span className="txt-style rounded-pill py-1 px-2 bg-dark">Featured</span>}<br />
                                                    <span className="bolder ft-20">{data.position}</span><br />
                                                    <div className="day">
                                                        <span> {data.postedAt} </span>
                                                        <span>.</span>
                                                        <span> {data.contract} </span>
                                                        <span>.</span>
                                                        <span> {data.location} </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-7 my-auto">
                                                <div className="sm-border">
                                                </div>
                                                <div className="row p-sm-screen">

                                                    <ul className="rounded">
                                                        <li>{data.role}</li>
                                                    </ul>

                                                    <ul className="rounded">
                                                        <li>{data.level}</li>
                                                    </ul>
                                                            
                                                    {data.languages && data.languages.map(language=> 
                                                    <ul className="rounded" key={language.index}>
                                                       <li>{language}</li>
                                                        
                                                    </ul>)}      

                                                    {data.tools && data.tools.map(tool=> 
                                                    <ul className="rounded" key={tool.id}>
                                                        <li>{tool}</li>
                                                        
                                                    </ul>)}

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        });
        return (
            <div className="search ml-1 mt-4">
                <input type="text"  placeholder="Search" onChange={(e)=>this.searchSpace(e)}/>
                {items}
            </div>
        );
        
    }

};

export default Card;

