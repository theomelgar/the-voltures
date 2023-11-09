"use client";

import styled from "styled-components";
import MenuButton from "./MenuButton";

export default function Navbar() {
  return (
    <Container>
      <Menu>
        <MenuButton />
        <div></div>
        <h3>MENU</h3>
      </Menu>
      <Title> THE VOLTURES</Title>
      <Media>
        SOCIAL
        <a href="https://www.instagram.com/the_voltures/" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0,0,256,256"
          >
            <g
              fill="#e3e3e3"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <g transform="scale(8,8)">
                <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
              </g>
            </g>
          </svg>
        </a>
        <a href="https://linktr.ee/thevoltures" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0,0,256,256"
          >
            <g
              fill="#4efd00"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <g transform="scale(5.33333,5.33333)">
                <path d="M22.25391,3.5c-1.36359,0 -2.5,1.13641 -2.5,2.5c-0.00775,0.73674 0.52066,1.37006 1.24687,1.49442c0.72621,0.12435 1.43524,-0.29707 1.67305,-0.99442h2.57422v5.30469c0,1.05608 0.69975,1.96718 1.55859,2.31641c0.85884,0.34923 1.99523,0.18573 2.73242,-0.57031l3.54883,-3.64062l1.54102,1.58008l-3.73242,3.55274c-0.76927,0.73163 -0.94513,1.8734 -0.59961,2.73828c0.34552,0.86488 1.26058,1.57227 2.32227,1.57227h5.34766v2.22852h-5.43945c-1.05646,0 -1.96734,0.70074 -2.31641,1.56055c-0.34907,0.85981 -0.18334,1.99603 0.57422,2.73242l3.83594,3.72656l-1.53516,1.54883l-1.61133,-1.61914c-0.37287,-0.40295 -0.93606,-0.57004 -1.46836,-0.43563c-0.53229,0.13441 -0.94865,0.54885 -1.08551,1.08052c-0.13686,0.53167 0.02763,1.09563 0.42886,1.47035l1.96484,1.97656c0.96461,0.96955 2.583,0.96936 3.54688,-0.00195l2.24609,-2.26367c0.96714,-0.97454 0.95052,-2.59808 -0.0332,-3.55469l-3.31445,-3.2207h4.70703c1.36359,0 2.5,-1.13641 2.5,-2.5v-3.22852c0,-1.36359 -1.13641,-2.5 -2.5,-2.5h-4.5957l3.19336,-3.03906c0.99484,-0.94793 1.02585,-2.57253 0.06641,-3.55664c-0.00065,0 -0.0013,0 -0.00195,0l-2.25195,-2.30859c-0.96838,-0.99303 -2.61298,-0.99177 -3.58008,0l-3.04883,3.12695v-4.57617c0,-1.36359 -1.13641,-2.5 -2.5,-2.5zM14.91602,6.69336c-0.65419,0 -1.30915,0.24873 -1.79297,0.74609l-2.25781,2.32227c-0.95593,0.98304 -0.92459,2.6066 0.06836,3.55273l3.20508,3.05469h-4.60547c-1.36359,0 -2.5,1.1364 -2.5,2.5v3.23047c0,1.3636 1.13641,2.5 2.5,2.5h4.69727l-3.3125,3.2168c-0.98816,0.95851 -0.99861,2.58733 -0.02539,3.56055l2.25195,2.25391c0.96609,0.96609 2.57774,0.9624 3.54102,-0.00586l7.31641,-7.35156l1.51563,1.52344c0.37287,0.40295 0.93606,0.57004 1.46836,0.43563c0.53229,-0.13441 0.94865,-0.54885 1.08551,-1.08052c0.13686,-0.53167 -0.02763,-1.09563 -0.42886,-1.47035l-1.86914,-1.87891c-0.96461,-0.96955 -2.58031,-0.96955 -3.54492,0l-7.31641,7.35156l-1.53906,-1.53906l3.83203,-3.72266c0,-0.00065 0,-0.0013 0,-0.00195c0.75756,-0.73639 0.92329,-1.87261 0.57422,-2.73242c-0.34907,-0.85981 -1.25994,-1.55859 -2.31641,-1.55859h-5.42969v-2.23047h5.35352c1.06131,0 1.97433,-0.70613 2.32031,-1.57031c0.34598,-0.86419 0.17409,-2.00572 -0.59375,-2.73828c-0.00065,-0.00065 -0.0013,-0.0013 -0.00195,-0.00195l-3.74219,-3.56836l1.54688,-1.5918l3.54687,3.64844c0.73693,0.75694 1.87318,0.9211 2.73242,0.57227c0.85924,-0.34884 1.56055,-1.25977 1.56055,-2.31641v-0.73828c0.00888,-0.7507 -0.53855,-1.39237 -1.28127,-1.50186c-0.74273,-0.10949 -1.45202,0.34693 -1.66013,1.06827l-3.10547,-3.19141c-0.48382,-0.49736 -1.13878,-0.74609 -1.79297,-0.74609zM22.23828,29.08984c-1.36359,0 -2.5,1.13641 -2.5,2.5v2.6875c-0.00765,0.54095 0.27656,1.04412 0.74381,1.31683c0.46725,0.27271 1.04514,0.27271 1.51238,0c0.46725,-0.27271 0.75146,-0.77588 0.74381,-1.31683v-2.1875h2.49609v9.41016h-2.49609v-1.56445c0.00765,-0.54095 -0.27656,-1.04412 -0.74381,-1.31683c-0.46725,-0.27271 -1.04514,-0.27271 -1.51238,0c-0.46725,0.27271 -0.75146,0.77588 -0.74381,1.31683v2.06445c0,1.36359 1.13641,2.5 2.5,2.5h3.49609c1.36359,0 2.5,-1.13641 2.5,-2.5v-10.41016c0,-1.36359 -1.13641,-2.5 -2.5,-2.5z"></path>
              </g>
            </g>
          </svg>
        </a>
      </Media>
    </Container>
  );
}

const Container = styled.nav`
  max-height: 100px;
  color: #ffffff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  gap: 70%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(189, 189, 189, 0.5);
`;

const Menu = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;

  h3 {
    font-weight: 400;
  }
  div {
    width: 30px;
  }
`;

const Title = styled.a`
  position: absolute;
  font-size: 40px;
  backdrop-filter: blur(5px);
  font-family: 'Condiment', cursive;`;

const Media = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 50px;
  }
`;
