// src/useFetch.jsx

import { useEffect, useState } from 'react';

function useData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (url) {
      let ignore = false;
      fetch(url)
        .then(response => response.json())
        .then(json => {
          if (!ignore) {
            setData(json);
          }
        });
      return () => {
        ignore = true;
      };
    }
  }, [url]);

  return data;
}
export default useData;

// use
// function ShippingForm({ country }) {
//   const cities = useData(`/api/cities?country=${country}`);
//   const [city, setCity] = useState(null);
//   const areas = useData(city ? `/api/areas?city=${city}` : null);

//   // ...
// }

// function useFetch(url) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       const response = await fetch(url);
//       const data = await response.json();
//       setData(data);
//     };
//     getData();
//   }, [url]);

//   return data;
// }

// export default useFetch;

// using
// import useFetch from "./useFetch";

// const url = 'https://api.github.com/users';

// function FirstComponent() {
//   const data = useFetch(url);

//   return (
//     <>
//       <div>First Component</div>
//       {data.length > 0 && data.map(element => {
//         return <div key={element.id}>{element.login}</div>;
//       })}
//     </>
//   );
// }

// export default FirstComponent;
