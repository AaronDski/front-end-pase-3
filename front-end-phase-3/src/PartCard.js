
import {useEffect, useState} from 'react';

function PartCard(){
    const [ partArr, setPartArr ] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/parts_list')
        .then(r => r.json())
        .then(setPartArr)
      }, []);

      console.log(partArr);
      return (
          <>
          </>
      )

}


export default PartCard;