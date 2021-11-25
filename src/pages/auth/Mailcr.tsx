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
    <div>
      <Nav />
      <Cent>
        {tk ? (
          <b>Correo satisfactoriamente verificado</b> || (
            <b>verifing your account</b>
          )
        ) : (
          <b>Es necesario confimar el correo</b>
        )}
      </Cent>
    </div>
  )
}

const Cent = styled.div`
  font-size: 2em;
  padding: 15px;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`
