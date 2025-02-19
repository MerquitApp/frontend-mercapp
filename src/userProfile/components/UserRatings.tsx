import React from 'react';

interface Rating {
  id: number;
  comment: string;
  score: number;
}

interface UserRatingsProps {
  ratings: Rating[];
}

function UserRatings({ ratings }: UserRatingsProps) {
  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold mb-3">Valoraciones</h3>
      {ratings && ratings.length > 0 ? (
        ratings.map((rating) => (
          <div key={rating.id} className="bg-gray-100 p-3 rounded-lg mb-2">
            <p className="text-gray-800">{rating.comment}</p>
            <small className="text-gray-600">Puntuación: {rating.score}</small>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No hay valoraciones.</p>
      )}
    </div>
  );
}

export default UserRatings;
