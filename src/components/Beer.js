import React from 'react';

const Beer = ({
  id,
  name,
  tagline,
  imageURL,
  description,
  handleDeleteBeer
}) => {
  const handleDelete = () => {
    console.log('hello from delete beer');
    handleDeleteBeer(id);
  };
  return (
    <div className="beer">
      <div>
        <h2 className="beer__title">{name}</h2>
        <p>
          <i>{tagline}</i>
        </p>
      </div>
      <div>
        <img className="beer__img" src={imageURL} alt={name} />
      </div>
      <div className="beer__body">
        <p>{description}</p>
      </div>
      <div className="beer__footer">
        <button className="beer__delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Beer;
