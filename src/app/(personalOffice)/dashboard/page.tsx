// 'use client'

//SSR
// const fetchData = () => fetch('https://jsonplaceholder.typicode.com/todos/1', {
//    cache: 'no-store',
// }).then(res => res.json())

//SSG
// const fetchData = () => fetch('https://jsonplaceholder.typicode.com/todos/1', {
//    cache: 'force-cache',
// }).then(res => res.json())

//ISR
const fetchData = () => fetch('https://jsonplaceholder.typicode.com/todos/1', {
   next: {revalidate: 10},
}).then(res => res.json())



const DashboardPage = async () => {
   // const [isAdmin, setIsAdmin] = useState(false);
   const data = await fetchData(); 

   return <div>{data.id}</div>
}

export default DashboardPage;