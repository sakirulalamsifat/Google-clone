import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../hooks/useGoogleSearch';
import Response from '../response';
import { Link } from '@material-ui/core';
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import Description from "@material-ui/icons/Description"
import ImageIcon from "@material-ui/icons/Image"
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import Home from "./Home"



function SearchPage() {
    const [{term},dispatch]=useStateValue();
    const {data}=useGoogleSearch(term);

    //const data=Response;

    console.log(data)
    return (
        <div className="searchPage">
            <div className='searchPage_header'>
                <Link to="/">
                <a href={<Home/>}><img className="searchPage_logo" src="https://www.festisite.com/static/partylogo/img/logos/google.png"/></a>
                </Link>
                
                <div className="searchPage_header_body">
                    <Search hideButtons/>
                   
                    <div className="searchPage_options">
                        <div className="searchPage_option_left">
                            <div className="searchPage_option">
                                <SearchIcon/>
                                <Link to="/all">All</Link>

                            </div>

                            <div className="searchPage_option">
                                <Description/>
                                <Link to="/news">News</Link>

                            </div>

                            <div className="searchPage_option">
                                <ImageIcon/>
                                <Link to="/images">imaages</Link>

                            </div>

                            <div className="searchPage_option">
                                <LocalOfferIcon/>
                                <Link to="/shopping">shopping</Link>

                            </div>

                            <div className="searchPage_option">
                                <RoomIcon/>
                                <Link to="/maps">maps</Link>

                            </div>

                            <div className="searchPage_option">
                                <MoreVertIcon/>
                                <Link to="/more">more</Link>

                            </div>

                        </div>

                        <div className="searchPage_option_right">
                        <div className="searchPage_option">
                                
                                <Link to="/setting">Setting</Link>

                            </div>
                            <div className="searchPage_option">
                                
                                <Link to="/tools">Tools</Link>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
            
            {term &&(
                            <div className="searchPage_results">
                                <p className="count">
                                   About {data?.searchInformation.formattedTotalResults}({data?.searchInformation.formattedSearchTime}) for {term}

                                </p>

                                {data?.items.map(item=>(
                                   <div className="searchPage_result">
                                        <a href={item.link}>
                                          {item.displayLink}
                                          </a> 
                                          <a className="searchPage_result_title" href={item.link}>
                                <h2>{item.title}</h2>

                                          </a>
                                          <p className="searchPage_result_snippet">
                                            {item.snippet}
                                          </p>
                                        </div>
                                ))}

                            </div>
            )}
        </div>
    )
}

export default SearchPage
