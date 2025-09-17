// // import React, { useEffect, useState } from 'react'

// // export default function useFetch  (url:string)  {
// //     const [data,setData] = useState(null)
// //     const [loading,setLoading] = useState(true)
// //     const [error,setError] = useState(null)

// //     useEffect(()=>{
// //         const fetchData = async  ()=> {
// //             try {
// //                 const res = await fetch(url)

// //             }
// //         }
// //     },[])
// //   return (

// //   )
// // }


// "use client";
// import { useState, useEffect } from "react";

// export default function useFetch<T>(url: string) {
//   const [data, setData] = useState<T | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(url);
//         if (!res.ok) throw new Error("Failed to fetch");
//         const json = await res.json();
//         setData(json);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// }
