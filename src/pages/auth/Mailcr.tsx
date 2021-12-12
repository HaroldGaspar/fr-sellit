import { Nav } from "components"
import React, { useEffect } from "react"
import { useHistory, useParams } from "react-router"
import { parseJwt, updateUser } from "services"
import styled from "styled-components"

export function Mailcr() {
  const history = useHistory()
  const { tk }: any = useParams()
  useEffect(() => {
    if (tk) {
      const id = parseJwt(tk).id
      updateUser(id, history)
    }
  }, [tk, history])
  return (
    <VhHy>
      <Nav />
      <Cent>
        {tk ? (
          <b>Correo satisfactoriamente verificado</b> || (
            <b>verifing your account</b>
          )
        ) : (
          <div className="caa">
            <p>Te hemos enviado un mail, revisa tu bandeja de entrada</p>
            <b>Es necesario confimar el correo</b>
          </div>
        )}
      </Cent>
    </VhHy>
  )
}

const Cent = styled.div`
  p {
    font-size: 0.7em;
  }
  font-size: 1.6em;
  display: flex;
  height: 90%;
  align-items: center;
  text-align: center;
  justify-content: center;
  .caa {
    border-radius: 0.25em;
    border: solid 1px #ccc;
    padding: 2rem;
    background: #efefef;
  }
`
const VhHy = styled.div`
  height: 100vh;
`
