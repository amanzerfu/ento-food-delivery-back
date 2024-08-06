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
    // Simulated data fetching
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

    // Additional fetching for a specific item
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
          <NoItemsMessage>No items listed.</NoItemsMessage>
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

// Styled Components
const MainPage = styled.div`
  padding: 20px;
  background-color: ${theme.colors.background};
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  color: ${theme.colors.primary};
  margin-bottom: 20px;
  font-size: 2.5em;
`;

const AdBanner = styled.div`
  margin-bottom: 30px;

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
  border: 1px solid ${theme.colors.primary};
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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
  color: ${theme.colors.primary};

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: ${theme.colors.lightGrey};
`;

const ItemDetails = styled.div`
  padding: 15px;
  text-align: center;
`;

const ItemName = styled.h2`
  font-size: 1.5em;
  color: ${theme.colors.primary};
  margin: 10px 0;
`;

const ItemDescription = styled.p`
  font-size: 1em;
  color: ${theme.colors.darkGrey};
  margin: 10px 0;
`;

const AddToCartButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.whiteColor};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

const NoItemsMessage = styled.p`
  font-size: 1.2em;
  color: ${theme.colors.darkGrey};
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.button`
  border: none;
  background-color: ${({ active }) => (active ? theme.colors.primary : theme.colors.whiteColor)};
  color: ${({ active }) => (active ? theme.colors.whiteColor : theme.colors.primary)};
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ active }) => (active ? theme.colors.primary : theme.colors.secondary)};
    color: ${theme.colors.whiteColor};
  }
`;

export default ShopList;
