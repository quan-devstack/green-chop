import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";

const NewsDetails = () => {
  const params = useParams();
  const newsId = params.newsId;

  return (
    <>
      <Header />
    </>
  );
};

export default NewsDetails;
