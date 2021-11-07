import { Nav, StoreDetail, UserDetail } from "components"
import InvoiceByCustomer from "components/customer/profile/InvoiceByCustomer"
import { ContainerDetail } from "pages"
import styled from "styled-components"

export function Profile() {
  return (
    <div>
      <Nav />
      <ContainerDetail>
        <>
          <StoreDetailStyle>
            <UserDetail />
            {localStorage.getItem("store") ? <StoreDetail /> : ""}
          </StoreDetailStyle>
          <InvoiceByCustomer />
        </>
      </ContainerDetail>
    </div>
  )
}
const StoreDetailStyle = styled.div`
  border: 1px solid #dedede;
  border-radius: 0.25em;
  padding: 2em 1.5em;
  margin: 0 auto;
  width: 100%;
  height: fit-content;

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
  background: #fafafa;
  .formstore {
    background: #fff;
    margin: 1em;
    padding: 1em 2em;
    border: 1px solid #eee;
    border-radius: 0.5em;
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
`
