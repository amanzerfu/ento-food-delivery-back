import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import theme from '../theme';
import Food from '../../TestApiJson/FoodList';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../assets/images/ethiopian-food.jpg';
import image2 from '../../assets/images/ethiopian-chechebsa-XL.jpg';
import image3 from '../../assets/images/awaze-XL.jpg';
import truncateText from '../TextHelper';

const ShopList = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            const response = Food.items;
            const startIdx = (currentPage - 1) * 6;
            const endIdx = startIdx + 6;
            const paginatedItems = response.slice(startIdx, endIdx);
            setItems(paginatedItems);
            setTotalPages(Math.ceil(response.length / 6));
        };
        fetchData();

          // Additional fetching for a specific item
    axios.get(`http://127.0.0.1:4000/api/shop-items/${13}`)
    .then(response => {
      setItem(response.data.items[0]);
    })
    .catch(error => console.error('Error fetching data:', error));
     
    }, [currentPage]);

    const handlePageChange = (newPage) => setCurrentPage(newPage);

    return (
        <MainContainer>
            <Header>
                <Title>Shop Our Exclusive Items</Title>
                <SubTitle>Unlock rewards as you shop and discover premium products!</SubTitle>
            </Header>
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
            <ItemGrid>
                {items.map(item => (
                    <Card key={item.id}>
                        <ImageWrapper>
                            <ItemImage src={item.imageurl} alt={item.name} />
                            <Badge>🔥 Trending</Badge>
                        </ImageWrapper>
                        <CardContent>
                            <ItemName>{item.name}</ItemName>
                            <Description>{item.description.slice(0, 50)}...</Description>
                            <Price>${item.price}</Price>
                            <ActionButtons>
                                <FavoriteButton>🤍</FavoriteButton>
                                <AddToCartButton>🛒 Add to Cart</AddToCartButton>
                            </ActionButtons>
                        </CardContent>
                    </Card>
                ))}
            </ItemGrid>
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
        </MainContainer>
    );
};

// Styled Components
const MainContainer = styled.div`
    background-color: ${theme.colors.background};
    padding: 20px;
    min-height: 100vh;
    color: ${theme.colors.whiteColor};
`;

const Header = styled.div`
    text-align: center;
    margin-bottom: 30px;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: ${theme.colors.primaryOne};
`;

const SubTitle = styled.p`
    font-size: 1.2rem;
    color: ${theme.colors.yelloColor};
`;

const ItemGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
`;

const Card = styled.div`
    background: ${theme.colors.transparent};
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1);
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.05);
    }
`;

const ImageWrapper = styled.div`
    position: relative;
`;

const ItemImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const Badge = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    background: ${theme.colors.neonMahneta};
    color: ${theme.colors.whiteColor};
    padding: 5px 10px;
    font-size: 0.8rem;
    border-radius: 5px;
    font-weight: bold;
`;

const CardContent = styled.div`
    padding: 15px;
`;

const ItemName = styled.h2`
    font-size: 1.5rem;
    margin: 0 0 10px;
    color: ${theme.colors.primaryTwo};
`;

const Description = styled.p`
    font-size: 0.9rem;
    color: ${theme.colors.whiteColor};
    margin-bottom: 10px;
`;

const Price = styled.p`
    font-size: 1.2rem;
    color: ${theme.colors.neonMahneta};
    font-weight: bold;
    margin-bottom: 15px;
`;

const ActionButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FavoriteButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    color: ${theme.colors.primaryOne};
    cursor: pointer;
    &:hover {
        color: ${theme.colors.neonMahneta};
    }
`;

const AddToCartButton = styled.button`
    background: ${theme.colors.primaryTwo};
    color: ${theme.colors.whiteColor};
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background: ${theme.colors.neonMahneta};
        color: ${theme.colors.black};
    }
`;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const PageNumber = styled.button`
    background: ${(props) => (props.active ? theme.colors.primaryOne : theme.colors.transparent)};
    color: ${theme.colors.whiteColor};
    border: none;
    padding: 10px;
    margin: 0 5px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background: ${theme.colors.primaryTwo};
    }
`;

const AdBanner = styled.div`
  margin-bottom: 40px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

  .carousel .slide img {
    width: 100%;
    height: 350px; /* Increased height for more impact */
    object-fit: cover;
    transition: transform 0.5s ease-in-out; /* Smooth zoom effect */

    &:hover {
      transform: scale(1.05); /* Slight zoom on hover for engagement */
    }
  }

  .carousel .legend {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%);
    color: ${theme.colors.whiteColor};
    font-size: 1.2em;
    padding: 10px 20px;
    border-radius: 0 0 10px 10px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .carousel .control-arrow {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
  }

  .carousel .control-arrow:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export default ShopList;
