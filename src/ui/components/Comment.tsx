import { LuStar } from 'react-icons/lu';

interface CommentProps {
  comments: {
    username: string;
    rating: number;
    text: string;
    avatar: string;
  }[];
}

const Comment: React.FC<CommentProps> = ({ comments }) => {
  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-lg font-semibold mb-4">Comentarios</h2>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className="border-b py-3 flex items-start gap-3">
            <img
              src={comment.avatar}
              alt={comment.username}
              className="w-10 h-10 rounded-full border"
            />
            <div>
              <p className="font-semibold">{comment.username}</p>
              <div className="flex mb-1">
                {[...Array(5)].map((_, i) => (
                  <LuStar
                    key={i}
                    className={`w-5 h-5 ${i < comment.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-600">{comment.text}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No hay comentarios aún.</p>
      )}
    </div>
  );
};

export default Comment;
