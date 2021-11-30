import {React, useEffect} from 'react'
import './style.css';
import { useDispatch, useSelector } from 'react-redux';

import {
  getAllCategory,
  addCategory,
  updateCategories,
  deleteCategories as deleteCategoriesAction
} from '../../actions';

/**
* @author
* @function Mycategory
**/


const Mycategory = (props) => {
  const category = useSelector(state => state.category);
  const renderCategories = (categories) => {
    let myCategories = [];
    
   
    for (let category of categories) {
        myCategories.push(

            <li key={category.name}>
              {
               category.parentId ? <a
              href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
              {category.name}
            </a> :
            <span>{category.name}</span>
          }
          {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
        </li>

        );
    }
    return myCategories;
}

const dispatch = useDispatch();

    

useEffect(() => {
    dispatch(getAllCategory());
}, []);

  return (
    <div class="categoryCard">
      <div class="card-body">
        <h5 class="category-title"><i class="fa fa-bars" 
        aria-hidden="true">&nbsp;
      </i>Category
      &nbsp;
      <i class="fa fa-caret-down" aria-hidden="true"></i></h5>
     <div className="categoryItems">
     <ul>
                { category.categories.length > 0 ? renderCategories(category.categories) : null }
            </ul>
     </div>
      </div>
          </div>
  )

}

export default Mycategory