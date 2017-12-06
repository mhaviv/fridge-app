import React from 'react';
// import PropTypes from 'prop-types';
import './Items.css';

function handleDelete(props, itemId) {
  console.log('Deleting item!');
  props.deleteItem(itemId);
}

function getExpirationStatus(date) {
  var now = new Date();
  var expiryDate = new Date(date);

  return expiryDate > now ? '' : 'is-expired';
}

function Items(props) {
  return (
    <div className="items">
      <h1>Items</h1>
      {
        props.items.length > 0 ?
          <ul>
            {props.items.map(item => (
              <li
                key={item.id}
                className={getExpirationStatus(item.expires)}
              >
                {item.name}
                <button onClick={() => handleDelete(props, item.id)}>delete</button>
              </li>
            ))}
          </ul> :
          <p>
            Your fridge is empty. Please add some items!
          </p>
      }
    </div>
  )
}

export default Items;