//To be done at a later stage

// import * as React from 'react';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function BasicPagination() {
//   const [page, setPage] = useState(1);
//   const [data, setData] = useState(null);

//   const handleChange = (event, value) => {
//     setPage(value);
//   };

//   useEffect(() => {
//     // Adjust the API endpoint to include the page parameter
//     const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=8e84a379&app_key=7fe22fc3eb88369a1e79fc4aaac0ebd7&ingr=1-5&page=${page}`;

//     axios.get(apiUrl)
//       .then(res => {
//         // Assuming your response data structure has a property called 'data'
//         setData(res.data.data);
//       })
//       .catch(() => {
//         alert('Error');
//       });
//   }, [page]);

//   return (
//     <Stack spacing={2}>
//       {/* Render your data here */}
//       {data && (
//         <div>
//           {/* Render your data items */}
//           {data.map(item => (
//             <div key={item.id}>{/* Render your item content here */}</div>
//           ))}
//           {/* Render the pagination component */}
//           <Pagination count={10} color="secondary" page={page} onChange={handleChange} />
//         </div>
//       )}
//     </Stack>
//   );
// }
