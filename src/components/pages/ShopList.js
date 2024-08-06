import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import theme from '../theme';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../assets/images/ethiopian-food.jpg';
import image2 from '../../assets/images/ethiopian-chechebsa-XL.jpg';
import image3 from '../../assets/images/awaze-XL.jpg';
import Food from '../../TestApiJson/FoodList';
import truncateText from '../TextHelper';
const ShopList = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [item, setItem] = useState(null);

  useEffect(() => {
    // axios.get(`http://127.0.0.1:4000/api/shop-items?page=${currentPage}&limit=6`)
    //   .then(response => {
    //     setItems(response.data.items);
    //     setTotalPages(response.data.totalPages);
    //   })
    //   .catch(error => console.error('Error fetching data:', error));
    const fetchData = () => {
      const response = Food.items;
      const startIdx = (currentPage - 1) * 6;
      const endIdx = startIdx + 6;
      const paginatedItems = response.slice(startIdx, endIdx);
      setItems(paginatedItems);
      setTotalPages(Math.ceil(response.length / 6));
      setItem(paginatedItems[0] || null);
    };
    fetchData();
    axios.get(`http://127.0.0.1:4000/api/shop-items/${13}`)
      .then(response => {
        setItem(response.data.items[0]);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <MainPage>
      <Title>Shop Items</Title>
      <AdBanner>
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <ItemImage src={image1} alt={item?.name} onError={(e) => { e.target.src = "https://via.placeholder.com/300"; console.error(`Image not found: ${item?.imageurl}`); }} />
            <p className="legend">Check out our new collection!</p>
          </div>
          <div>
            <img src={image2} onError={(e) => { e.target.src = "https://via.placeholder.com/300"; console.error(`Image not found: ${item?.imageurl}`); }} alt="Second Choice today" />
            <p className="legend">Exclusive deals on the latest items!</p>
          </div>
          <div>
            <img src={image3} alt="Third Choice today" />
            <p className="legend">Limited time offers, don't miss out!</p>
          </div>
        </Carousel>
      </AdBanner>
      <ItemList>
        {items && items.length > 0 ? (
          items.map(item => (
            <Item key={item.id}>
              <FavoriteButton>❤️</FavoriteButton>
              <ItemImage src={item.imageurl} alt={item.name} onError={(e) => { e.target.src = "https://via.placeholder.com/300"; console.error(`Image not found: ${item.imageurl}`); }} />
              <ItemDetails>
                <ItemName>{item.name}</ItemName>
                <ItemDescription>{truncateText(item.description, 10)}</ItemDescription>
                <AddToCartButton>Add to Cart</AddToCartButton>
              </ItemDetails>
            </Item>
          ))
        ) : (
          <p>No items listed.</p>
        )}
      </ItemList>
      <Pagination>
        {Array.from({ length: totalPages }).map((_, index) => (
          <PageNumber
            key={index}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </PageNumber>
        ))}
      </Pagination>
    </MainPage>
  );
};

const MainPage = styled.div`
  padding: 40px;
  background-color: ${theme.colors.background};
`;

const Title = styled.h1`
  text-align: center;
  color: ${theme.colors.background};
  margin-bottom: 20px;
`;

const AdBanner = styled.div`
  margin-bottom: 20px;
  .carousel .slide img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .carousel .legend {
    background: rgba(0, 0, 0, 0.5);
    color: ${theme.colors.whiteColor};
  }
`;

const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Item = styled.div`
  position: relative;
  background-color: ${theme.colors.whiteColor};
  border: 1px solid ${theme.colors.background};
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FavoriteButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: ${theme.colors.neonMahneta};
`;

const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: white;
`;

const ItemDetails = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemName = styled.h2`
  font-size: 1.5em;
  color: ${theme.colors.neonMahneta};
  margin: 10px 0;
`;

const ItemDescription = styled.p`
  font-size: 1em;
  color: ${theme.colors.background};
  margin: 10px 0;
  text-align: center;
`;

const AddToCartButton = styled.button`
  background-color: ${theme.colors.background};
  color: ${theme.colors.whiteColor};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    background-color: ${theme.colors.neonMahneta};
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const PageNumber = styled.button`
  border: none;
  background-color: ${({ active }) => (active ? theme.colors.background : theme.colors.whiteColor)};
  color: ${({ active }) => (active ? theme.colors.whiteColor : theme.colors.background)};
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${({ active }) => (active ? theme.colors.background : theme.colors.neonMahneta)};
  }
`;

export default ShopList;
