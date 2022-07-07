import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import icon from '@icons/ic_Search@2x.png';
import '@styles/Search.scss';

const Search = (props) => {

    const [tag, setTag] = useState();

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/itemSearch:'+tag)
    };

    return (
        <div className='containerSearch'>
         <input type="search" className='searchInput' placeholder="Nunca dejes de buscar"  onChange={(e) => setTag(e.target.value)}/> 
         <input type="submit" value="Buscar" className='iconSearch' onClick={handleClick}/>
        </div>
    );
}

export default Search;