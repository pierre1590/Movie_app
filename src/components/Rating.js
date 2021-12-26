import React, {useState} from "react"
import {IoIosStar,  IoIosStarOutline, IoIosStarHalf} from 'react-icons/io';

export const Rating = (props) => {
    const [rating, setRating] = useState(props.rating);

  
    
    function chooseStar(index) {
        // In any cases, if the star rendered is under the score, it's a full one
        if (index <= rating) return IoIosStar;
        else {
          // But if we match the correct number, we must check if this is an integer
          if (
            rating && 
            !Number.isSafeInteger(rating) &&
             Math.ceil(rating)===index) {
            // If there's no rating, or is not an integer, it's a half star
            return IoIosStarHalf ;
          }
    
          // If no case match, well it's an empty one
          return IoIosStarOutline;
        }
      }
    
      return (
        <div style={{ color: 'orange' }}>
          {/* Create one Star for every loop */}
          {[1,2,3,4,5,6,7,8,9,10].map((number) => {
            // For every star, we need to check if we render a full or half one
            const FinalStar = chooseStar(number);
    
            return <FinalStar onClick={() => setRating(number)} />;
          })}
          {/*style to rating number and if If the number is greater than three digits use the method 1.000  */}
          <span style={{ fontSize: '23px',margin:'5px'}}>{props.rating_number > 999 ? props.rating_number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : props.rating_number}</span>
      </div>
);
}