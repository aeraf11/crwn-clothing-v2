// <<<<<<< HEAD
import './categories.styles.scss';
import Directory from './components/directory/directory.component';
const App = () => {
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]
  
  return (
    <Directory categories={categories} />
    // <div className='categories-container'>
    //   {categories.map((category) => (
    //     <CategoryItem key={category.id} category = {category} />
    //   )
    //   )}
    // </div>
// =======
// const App = () => {
//   const categories = [
//     {
//       id: 1,
//       title: 'Hats',
//     },
//     {
//       id: 2,
//       title: 'Jackets',
//     },
//     {
//       id: 3,
//       title: 'Sneakers',
//     },
//     {
//       id: 4,
//       title: 'Womens',
//     },
//     {
//       id: 5,
//       title: 'Mens',
//     },
//   ];

//   return (
//     <div className='categories-container'>
//       {categories.map(({ title }) => (
//         <div className='category-container'>
//           <div className='background-image' />
//           <div className='category-body-container'>
//             <h2>{title}</h2>
//             <p>Shop Now</p>
//           </div>
//         </div>
//       ))}
//     </div>
// >>>>>>> lesson-2
  );
};

export default App;
