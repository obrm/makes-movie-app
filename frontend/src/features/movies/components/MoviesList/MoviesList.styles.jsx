import styled from 'styled-components';

export const MovieGrid = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 60px;
  width: 100%;
  margin-top: 20px;
 padding-bottom:20px;
  background-color: var(--secondary-color);
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
  }
 
`;
