import styled from "styled-components"

export const SpinnerGlobainer = styled.span`
  height: 100vh;
  display: grid;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`
export const TextSpiner = styled.span`
  margin: 0 auto;
  padding: 0 auto;
  /* display: block; */
`
// .form-footer {
//   padding: 0;
// }

export const AuthLogo = styled.div`
  text-align: center;
  width: 100%;
  font-weight: 700;
  font-size: 35px;
  margin: 0.5em 0;
`
/* auth */
export const Cardauth = styled.div`
  width: 350px;
  margin: 0 auto;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  padding: 1.5em 2em;
  @media (max-width: 400px) {
    width: 250px;
  }
`

export const CardauthTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 1rem;
`

export const SpTxt = `
  align-items: initial;
  `

export const Qstn = styled.button`
  display: block;
  border: none;
  margin-left: auto;
  background-color: transparent;
  font-weight: 700;
  &:hover {
  color: blue;
  text-decoration-line: underline;

  `

export const FormTitle = styled.span`
  display: flex;
  font-size: 25px;
  font-weight: 700;
  padding: 0;
  margin-bottom: 1rem;
`

// b {
//   font-size: small;
//   padding: auto;
// }
export const FormSubtitle = styled.span`
  font-size: large;
`

export const Iscustomer = styled.span`
  display: none;
`

export const CardauthBtn = styled.button`
  cursor: pointer;
  text-align: center;
  width: 100%;
  border: 2px solid transparent;
  border-radius: 4px;
  margin: 1.5em 0;
  padding: 0.5rem 0.75rem;
  display: block;
  background-color: #444;
  transition: color 0.15s all;
  color: #fff;
  &:hover {
    /* background-color: rgba(0, 0, 0, 0.5); */
    background-color: #fefefe;
    color: #444;
    border: 2px solid #444;
    font-weight: 700;
    transition: 0.5s ease all;
  }
  &:focus {
    background-color: #000;
    color: #fff;
    font-weight: bolder;
    overflow: hidden;
  }
`
