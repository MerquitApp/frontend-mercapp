'use client';
import React, { useState, useEffect, useCallback } from 'react';

interface Rating {
  id: number;
  score: number;
  comment: string;
}

interface RatingComponentProps {
  userId: number; // Id del usuario que se está visualizando (a quien se le dejan las valoraciones)
  hasRated: boolean; // true si el usuario actual ya ha dejado su valoración
}

const RatingComponent: React.FC<RatingComponentProps> = ({ userId }) => {
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRatings = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`http://localhost:3001/reputation?id=${userId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      if (!res.ok) {
        throw new Error('Error al obtener las valoraciones');
      }
      const data = await res.json();
      setRatings(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Error desconocido');
      }
    }
    setLoading(false);
  }, [userId]);

  useEffect(() => {
    fetchRatings();
  }, [fetchRatings]);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Valoraciones</h3>
      {loading && <p>Cargando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {ratings.length > 0 ? (
          ratings.map((rating) => (
            <li key={rating.id} className="mb-3 p-2 bg-white rounded shadow">
              <p>
                <span className="font-bold">Puntuación:</span> {rating.score}
              </p>
              <p>{rating.comment}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-600">No hay valoraciones.</p>
        )}
      </ul>
    </div>
  );
};

export default RatingComponent;
