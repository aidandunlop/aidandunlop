import styled from 'styled-components';

const HideOnWeb = styled.div`
    display: none;
    @media print {
      display: flex;
    }
`;

export default HideOnWeb;
