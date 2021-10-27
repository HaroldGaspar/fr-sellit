import { Nav } from "components"
import React, { useEffect } from "react"
import { useHistory, useParams } from "react-router"
import { updateUser } from "services"
import styled from "styled-components"

export function Mailcr() {
  const history = useHistory()
  const { tk }: any = useParams()
  const suss = "mail sucessfuly verified"
  useEffect(() => {
    if (tk) {
      const id = JSON.parse(atob(tk.split(".")[1])).id
      updateUser(id, history)
    }
  }, [])
  return (
    <div>
      <Nav />
      <Cent>
        {tk ? suss || "verifing your account" : "Mail confimation is required"}
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
