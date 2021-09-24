import { useState } from 'react'
import styled from "styled-components"
import { FaBars, FaStickyNote, FaFacebookF, FaEnvelope } from 'react-icons/fa'
import member1 from '../../assets/07/member1.jpg'
import member2 from '../../assets/07/member2.jpg'
import member3 from '../../assets/07/member3.jpg'
import member4 from '../../assets/07/member4.jpg'

const Body = styled.div<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${p => p.bgColor};
`

const CardContainer = styled.section`
  width: 340px;
  padding: 30px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: var(--white);
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
`

const NavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & > button {
    border: none;
    background-color: transparent;
    font-size: 20px;
    color: #666;
    cursor: pointer;
  }
`

const Profile = styled.article<{ imageShadow: string; profileButtonColor: string; profileShadow: string}>`
  width: 100%;
  text-align: center;

  & > img {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
    border-radius: 50%;
    box-shadow: 5px 15px 30px ${p => p.imageShadow};
  }

  & > h1 {
    margin-bottom: 5px;
    font-family: 'arial';
    font-size: 22px;
    font-weight: bold;
    line-height: 1;
    color: #555;
  }

  & > h2 {
    margin-bottom: 30px;
    font-family: 'arial';
    font-size: 12px;
    font-weight: bold;
    line-height: 1;
    color: #bbb;
  }

  & > button {
    width: 180px;
    height: 32px;
    margin: 0 auto 20px;
    border: none;
    border-radius: 16px;
    background: ${p => `linear-gradient(45deg, ${p.profileButtonColor})`};
    box-shadow: 5px 10px 20px ${p => p.profileShadow};
    font-size: 10px;
    font-weight: bold;
    font-family: 'arial';
    color: #fff;
    line-height: 32px;
  }
`

const Contact = styled.ul`
  margin-bottom: 25px;

  & > li {
    padding: 10px 0;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }

    svg {
      width: 20%;
      font-size: 15px;
      color: #555;
      text-shadow: 2px 2px 2px #ddd;
    }

    span {
      font-family: 'Orbitron', sans-serif;
      font-size: 11px;
      color: #555;
      letter-spacing: 1px;
    }
  }
`

const Links = styled.nav`
  text-align: center;
`

const ButtonToOther = styled.button<{ active: boolean; color: string; shadow: string }>`
  width: 30px;
  height: 30px;
  margin: 0 10px;
  border: none;
  border-radius: 50%;
  background-color: ${p => p.color};
  box-shadow: 5px 5px 10px ${p => p.shadow};
  cursor: pointer;
  opacity: ${p => p.active ? '1' : '0.4'};
  filter: ${p => p.active ? 'saturate(1)' : 'saturate(0.7)'};
`

const profiles = [
  {
    src: member1,
    bgColor: '#ebfaff',
    imageShadow: 'rgba(173, 216, 230, 0.8)',
    profileButtonColor: '#4affff, #35e0f7',
    profileShadow: 'rgba(0, 255, 255, 0.493)',
    buttonColor: '#35e0f7',
    buttonShadow: 'rgba(74, 255, 255, 0.7)',
  },
  {
    src: member2,
    bgColor: '#edffeb',
    imageShadow: '#bdccb783',
    profileButtonColor: '#a0ff9d, #55f6b2',
    profileShadow: 'rgba(33, 250, 105, 0.3)',
    buttonColor: '#55f5cd',
    buttonShadow: 'rgba(33, 250, 105, 0.3)',
  },
  {
    src: member3,
    bgColor: '#fff3fd',
    imageShadow: 'rgba(252, 99, 214, 0.2)',
    profileButtonColor: '#ef74ff, #ff11c4',
    profileShadow: 'rgba(255, 17, 196, 0.357)',
    buttonColor: '#ff80df',
    buttonShadow: 'rgba(255, 128, 223, 0.7)',
  },
  {
    src: member4,
    bgColor: '#f5f0ff',
    imageShadow: 'rgba(183, 82, 250, 0.2)',
    profileButtonColor: '#8e74ff, #a011ff',
    profileShadow: 'rgba(160, 17, 255, 0.4)',
    buttonColor: '#a794fd',
    buttonShadow: 'rgba(167, 148, 253, 0.7)',
  }
]

const ProfileCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentProfile = profiles[currentIndex]

  return (
    <Body bgColor={currentProfile.bgColor}>
      <CardContainer>
        <NavMenu>
          <button>
            <FaBars />
          </button>
          <button>
            <FaStickyNote />
          </button>
        </NavMenu>
        <Profile
          imageShadow={currentProfile.imageShadow}
          profileButtonColor={currentProfile.profileButtonColor}
          profileShadow={currentProfile.profileShadow}
        >
          <img src={currentProfile.src} alt='프로필 이미지' />
          <h1>DCODELAB</h1>
          <h2>UI/UX INTERACTIVE DEVELOPER</h2>
          <button>VIEW MORE</button>
        </Profile>
        <Contact>
          <li>
            <FaFacebookF />
            <span>Visit My Facebook Page</span>
          </li>
          <li>
            <FaEnvelope />
            <span>hadaboni80@naver.com</span>
          </li>
        </Contact>
        <Links>
          {profiles.map((profile, index) => (
            <ButtonToOther
              key={profile.bgColor}
              active={currentIndex === index}
              color={profile.buttonColor}
              shadow={profile.buttonShadow}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </Links>
      </CardContainer>
    </Body>
  )
}

export default ProfileCard
