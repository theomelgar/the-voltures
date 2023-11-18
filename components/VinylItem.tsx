import styled from 'styled-components';
import album from "../public/soyouthinkyouknow.webp";

const VinylContainer = styled.div`
  color: #000000;
  font-size: 16px;

`;

const Product = styled.div`
  width: 200px;
  padding: 35px 0px 0px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover .vinyl {
    top: -5px;
    transform: rotateZ(-25deg) translateX(2px) translateY(-2px);
  }
`;

const Vinyl = styled.div`
  position: relative;
  z-index: 1;
  top: 40px;
  transition: 1s;
  transform: rotateZ(30deg) translateX(2px);
`;

const VinylInside = styled.div`
  position: relative;
  z-index: 2;
  width: 8px;
  height: 8px;
  box-shadow: 0px 0px 0px 16px #e4262f;
  border-radius: 50%;
  top: 9px;
  left: 1px;
  margin: 0 auto;
`;

const VinylOutside = styled.div`
  position: relative;
  z-index: 1;
  width: 10px;
  height: 10px;
  box-shadow: 0px 0px 0px 65px #000;
  border-radius: 50%;
  margin: 0 auto;
`;

const LightMask = styled.div`
  width: 140px;
  height: 140px;
  position: absolute;
  top: -65px;
  left: -65px;
  border-radius: 50%;
  overflow: hidden;
`;

const Light = styled.div`
  position: absolute;
  width: 45px;
  height: 70px;

  &.light1 {
    left: 50px;
    top: 0px;
    -webkit-clip-path: polygon(100% 0, 0 0, 50% 100%);
    clip-path: polygon(100% 0, 0 0, 50% 100%);
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(0, 0, 0, 0.4) 100%);
  }

  &.light2 {
    left: 50px;
    bottom: 0px;
    -webkit-clip-path: polygon(50% 0, 0 100%, 100% 100%);
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(0, 0, 0, 0.4) 100%);
  }
`;

const AlbumBag = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  z-index: 2;
  background-color: #d19c51;
  left: 0px;
  right: 0px;
  margin: 0 auto;
`;

const AlbumCover = styled.div`
  width: 140px;
  height: 140px;
  position: absolute;
  top: 5px;
  left: 5px;
  background: url('https://i.scdn.co/image/ab67616d00001e0217674b747b847439ff8c83ba') no-repeat;
  background-size: cover;
`;

const AlbumBagTop = styled.div`
  width: 150px;
  height: 10px;
  -webkit-clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
  clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
  background-color: rgb(179, 121, 41);
  position: absolute;
  z-index: 0;
  top: 26px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
`;

const AlbumContent = styled.div`
  margin-top: 140px;
  line-height: 0.8;
  padding: 5px 0;
  text-align: center;

  p {
    margin: 0;
    line-height: 1.5;

    &.musician {
      font-weight: bold;
    }

    &.release-date {
      font-size: 12px;
    }

    &.price {
      font-weight: bold;
    }
  }
`;

const VinylItem = () => {
  return (
    <VinylContainer>
      <Product>
        <AlbumBag className="vinyl-bag">
          <AlbumCover />
        </AlbumBag>
        <AlbumBagTop />
        <Vinyl className='vinyl'>
          <VinylInside />
          <VinylOutside>
            <LightMask>
              <Light className="light light1" />
              <Light className="light light2" />
            </LightMask>
          </VinylOutside>
        </Vinyl>
        <AlbumContent>
          <p className="musician">The Voltures</p>
          <p className="album">So You Think You Know</p>
          <p className="release-date">2019</p>
        </AlbumContent>
      </Product>
    </VinylContainer>
  );
};

export default VinylItem;