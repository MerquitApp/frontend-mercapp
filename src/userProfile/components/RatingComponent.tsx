import { Reputation } from '@/types';

interface RatingComponentProps {
  reputation: Reputation[];
}

const RatingComponent: React.FC<RatingComponentProps> = ({ reputation }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-4">Valoraciones</h3>
      {reputation.length === 0 && (
        <h4 className="text-gray-500 ">No hay valoraciones</h4>
      )}
      <ul>
        {reputation.map(({ comment, score, id }) => (
          <li key={id} className="mb-3 p-2 bg-white rounded shadow">
            <p>
              <span className="font-bold">Puntuación:</span> {score}
            </p>
            <p>{comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingComponent;
