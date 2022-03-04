import React, { useState, useEffect, useContext } from 'react';
import { useLazyQuery } from '@apollo/client';
import Masonry from 'react-masonry-css'
import debounce from 'lodash.debounce';

import GifElement from '../GifElement';
import Loader from '../Loader';
import { SEARCH_QUERY, TRENDING_QUERY } from '../../commons/queries';
import SearchTextContext from '../../context/SearchTextContext';

import './styles.css';

const Layout = () => {
  const [gifsList, setGifsList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const { value: searchValue } = useContext(SearchTextContext)

  const breakpoints = {
    default: 4,
    1366: 3,
    1024: 2,
    700: 1
  };

  const [fetchTrending, { loading, data: trendingData }] = useLazyQuery(TRENDING_QUERY);
  const [fetchSearch, { loading: searchLoader, data: searchData }] = useLazyQuery(SEARCH_QUERY);

  useEffect(() => {
    window.onscroll = debounce(() => {
      if (Math.abs((window.innerHeight + document.documentElement.scrollTop) - document.documentElement.offsetHeight) < 2) {
        setPageNumber(pn => pn + 1);
      }
    }, 100);
  }, []);

  useEffect(() => {
    setPageNumber(0);
    setGifsList([]);
  }, [searchValue])

  console.log("searchValue", searchValue);

  useEffect(() => {
    if (searchValue) {
      fetchSearch(
        {
          variables: {
            offset: 25 * pageNumber,
            q: searchValue
          }
        })
    } else {
      fetchTrending({ variables: { offset: 25 * pageNumber } });
    }
  }, [pageNumber, searchValue]);

  useEffect(() => {
    if (!trendingData) return;
    const { trending: { gifs = [] } } = trendingData;
    if (gifs?.length > 0) {
      setGifsList(prevGifs => [...prevGifs, ...gifs]);
    }
  }, [trendingData]);

  useEffect(() => {
    if(!searchData) return;
    const { search: { gifs = [] } } = searchData;
    if (gifs?.length > 0) {
      setGifsList(prevGifs => [...prevGifs, ...gifs]);
    }
  }, [searchData]);

  return (
    <div className="gifsWrapper">
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {
          gifsList.map((gif, index) => {
            return <GifElement key={gif.id} gif={gif.images.downsized.url} id={gif.id} user={gif.user}/>
          })
        }
      </Masonry>
      {
        (loading || searchLoader) && <Loader />
      }
    </div>
  )
}

export default Layout;