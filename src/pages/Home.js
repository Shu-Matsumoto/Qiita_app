import {useState, useEffect} from 'react';
import {css} from '@emotion/react';
import {Box, Title} from '../components/atoms';
import axios from 'axios';
import PostItem from "../components/posts/PostItem";
import SearchBar from '../components/common/SearchBar';
import Pagination from '../components/common/Pagination';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState();
 const [page, setPage] = useState(1);

  const fetchPosts = async (pageNumber) => {
    try {
      const params = {
        page: pageNumber,
        per_page: '20',
        query,
      };
      const headers = {
        Authorization: `Bearer ${process.env.REACT_APP_QIITA_KEY}`,
      };

      const response = await axios.get('https://qiita.com/api/v2/items', {
        headers,
        params,
      });

      setPosts(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  // 「次へ」ボタンクリックイベントハンドラ
  const handleOnNext = () => {
    const toPage = page + 1;
    // console.log(currentPage);
    // console.log(toPage);
    setPage(toPage);
    fetchPosts(toPage);
  };

  // 「前へ」ボタンクリックイベントハンドラ
  const handleOnPrevious = () => {
    const toPage = page - 1;
    // console.log(currentPage);
    // console.log(toPage);
    setPage(toPage);
    fetchPosts(toPage);
  };

  // 「ページ番号N」ボタンクリックイベントハンドラ
  const handleOnPagePress = (pageNumber) => {
    //console.log(currentPage);
    //console.log(pageNumber);
    setPage(pageNumber);
    fetchPosts(pageNumber);
  };

  useEffect(() => {
    fetchPosts(1);
  }, [query]);

  return (
    <Box col>
      <Box css={contaienr} col>
        <Box css={header}>
          <Title size="sm">記事一覧</Title>
          <SearchBar onEnterPress={value => setQuery(value)} />
        </Box>
        <Box css={postWrapper} col>
          {posts.map((post, index) => (
            <PostItem key={index} post={post} margin={32} />
          ))}
          <Pagination
            currentPage={page}
            onNext={handleOnNext}
            onPrevious={handleOnPrevious}
            onPagePress={handleOnPagePress}
            isInfinite={false}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

const contaienr = css`
  padding: 120px 0 80px;
`;

const header = css`
  column-gap: 40px;
  align-items: center;
`;

const postWrapper = css`
  margin-top: 40px;
`;