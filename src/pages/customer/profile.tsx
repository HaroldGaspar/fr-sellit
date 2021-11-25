import { Nav, StoreDetail, UserDetail } from "components"
import InvoicesProfile from "components/customer/profile/InvoicesProfile"
import styled from "styled-components"

export function Profile() {
  return (
    <>
      <Nav />
      <ContainerDetail>
        <>
          <StoreDetailStyle>
            <UserDetail />
            {localStorage.getItem("store") ? <StoreDetail /> : ""}
          </StoreDetailStyle>
          <InvoicesProfile />
        </>
      </ContainerDetail>
    </>
  )
}

const ContainerDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  max-width: 1000px;
  margin: 2em auto 0 auto;
  height: 80vh;
  padding: 0 15px;
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const StoreDetailStyle = styled.div`
  border-radius: 0.25em;
  padding: 2em;
  margin: 0 auto;
  width: 100%;
  // height: fit-content;
  // min-height: -webkit-fill-available;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2,
  h5,
  h4 {
    text-align: center;
  }
  h5 {
    font-weight: 700;
  }

  .form__label {
    width: 100%;
  }
  // background: #f4f4f4;
  .formstore {
    color: #776;
    margin: 1em 2em;
    // padding: 1em 2em;
  }
  .form__control {
    width: 100%;
    padding: 0.25rem 0.5rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }
  .form__control:focus {
    outline-color: #aaa;
  }
  .mssg {
    // min-height: 300px;
    // display: flex;
    // align-items: center;
  }
  .padd {
    padding: 0 1.5em;
    width: 100%;
  }
`
