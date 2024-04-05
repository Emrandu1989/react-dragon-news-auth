import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    console.log(categories)
    useEffect(()=>{
          fetch('categories.json')
          .then(res=> res.json())
          .then(data=>setCategories(data))
    },[])
    return (
        <div className="space-y-6">
             <h2 className="text-2xl">Left Side : {categories.length} </h2>
             {
                categories.map(category => <Link
                      to={`/category/${category.id}`}
                     className="block text-xl font-semibold"
                      key={category.id}>{category.name}</Link>  )
             }
        </div>
    );
};

export default LeftSideNav;