import { useParams } from "react-router-dom";
import React, {useState, useEffect, useRef} from 'react';
import {getMovieCredits} from '../servises/movieAPI';
import { ActorContainer } from "./Cast.styled";
import img from '../../images/no-image-placeholder.png';
import { ThreeDots } from 'react-loader-spinner';


const Cast = () => {
    const [cast, setCast]= useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const refDiv = useRef('');


    useEffect(()=> {
        setLoading(true);
        try {
            const fetchCast = async (id) => {
                const result = await getMovieCredits(id);
                setCast(result);
                if (result.length === 0) {
                    refDiv.current.textContent = 'There is no info about actors available';
                    return;
                }
                }
            fetchCast(id);
        } catch (error) {
            console.log(error);
        } finally {setLoading(false)}
       
    }, [id])


    
  return (
    <ActorContainer>
    {loading === false ? cast.map(({name, character, profile_path, cast_id}) => 
        <li className="li" key={cast_id}>
            <div>
                <img src={profile_path !== null ? `https://image.tmdb.org/t/p/w200/${profile_path}` : img} alt={name}></img>

            </div>
            <div className="credentials">
            <div >
                    <div className="credentials-item"><b>{name}</b></div>
                    <div>Character: {character}</div>
                </div>
            </div>
        </li>

    ) : <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="blue"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass="loader"
    visible={true}
  /> }
    {cast.length === 0 ? <div ref={refDiv}></div> : null}
    </ActorContainer>
  )
}


export default Cast