'use client';

import { useState } from 'react';
import { LuStar } from 'react-icons/lu';

const CommentBox = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-lg font-semibold mb-2">Deja tu valoración</h2>
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <LuStar
            key={star}
            className={`w-8 h-8 cursor-pointer transition-colors ${
              (hover || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
            }`}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(star)}
          />
        ))}
      </div>
      <textarea
        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        rows={4}
        placeholder="Escribe tu comentario..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        className="mt-4 w-full bg-primaryPalette text-white p-2 rounded-md transition-opacity hover:opacity-90"
        onClick={() => alert(`Valoración: ${rating}\nComentario: ${comment}`)}>
        Enviar
      </button>
    </div>
  );
};

export default CommentBox;
