/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'

const HeaderContainer = styled.header`
  height: 120px;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
  }
`

const InnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1180px;
  height: 80px;
  margin: 0 auto;

  & > h1 > a {
    font: bold 24px/1 'arial';
    color: #444;
  }
`

const OverHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  width: 1180px;
  height: 40px;
  margin: 0 auto;
  padding: 0 40px;
`

const GNB = styled.ul`
  display: flex;
  justify-content: space-between;

  & > li > a {
    padding: 20px 40px;
    font: bold 15px/1 'arial';
    color: #555;
    text-transform: uppercase;
    transition: all 0.5s;

    &:hover {
      background: #555;
      color: #fff;
    }
  }
`

const Util = styled.ul`
  display: flex;
  justify-content: flex-end;

  & > li > a {
    padding: 0px 10px;
    font: 12px/1 'arial';
    color: #999;
  }
`

const GNBList = ['Department', 'Gallery', 'Youtube', 'Community', 'Location']
const UtilList = ['Contact', 'Help', 'Login', 'Join', 'Sitemap']

const Header = () => {
  return (
    <HeaderContainer>
      <OverHeader>
        <Util>
          {UtilList.map(item => (
            <li key={item}>
              <a href='#'>{item}</a>
            </li>
          ))}
        </Util>
      </OverHeader>
      <InnerHeader>
        <h1>
          <a href='#'>DCODLAB</a>
        </h1>
        <GNB>
          {GNBList.map(item => (
            <li key={item}>
              <a href='#'>{item}</a>
            </li>
          ))}
        </GNB>
      </InnerHeader>
    </HeaderContainer>
  )
}

export default Header
