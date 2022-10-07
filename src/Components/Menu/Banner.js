import styled from 'styled-components';
import bannerImg from '../../image/banner.png';

const BannerBlock = styled.div`
  img {
    width: 100%;
  }
`;

export const Banner = () => (
  <BannerBlock>
    <img src={bannerImg} alt="banner" />
  </BannerBlock>
);
