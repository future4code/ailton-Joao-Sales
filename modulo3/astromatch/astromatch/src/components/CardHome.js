import React from 'react'
import { CardMain, ProfileText } from '../pages/styled'

export default function CardHome(props) {

  return (
    <div>
      {props.profile &&
        <CardMain
          name={props.profile.name}
          photo={props.profile.photo}
          role={props.profile.photo_alt}//acessibilidade
        >
          <ProfileText>
            <h3>{`${props.profile.name}, ${props.profile.age} anos`}</h3>
            <h4>{props.profile.bio}</h4>
          </ProfileText>
        </CardMain>}
        {/* //consertar bug */}
      {/* {props.profile.name || <div>carregando...</div>} */}
      
    </div>
  )
}
