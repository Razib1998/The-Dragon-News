import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, author, details, _id } = news;
  const authorName = news?.author?.name;
  const publishedDate = news?.author?.published_date;
  const authorImg = news?.author?.img;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl mb-12">
        <div className="flex items-center gap-6 bg-slate-200">
          <div>
            <img className="w-16 rounded-full" src={authorImg} alt="" />
          </div>
          <div>
            <h2 className="font-bold">{authorName}</h2>
            <p>{publishedDate}</p>
          </div>
        </div>
        <h2 className="card-title mb-4 mt-4">{title}</h2>
        <figure>
          <img className="w-[580px]" src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}{" "}
              <Link to={`/news/${_id}`}>
                <button className="btn btn-link">Read more</button>
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
