import React from 'react';
import { Link as LinkRoute } from 'react-router-dom'

import { TypeRecuperation } from './interface/types'

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton, IconButton } from 'office-ui-fabric-react';

interface IContentLoginProps {
    type: TypeRecuperation;
    error?: boolean;
}

const ContentLogin = (props: IContentLoginProps):JSX.Element => (
    <>
        {
            props.type === "account" ?
                <></>
                :
                <div className="centerH" style={{ color: '#666666' }}>
                    <IconButton iconProps={{ iconName: 'back' }} title="Emoji" ariaLabel="Emoji" onClick={() => false} />
                    <p>Roma Siqueira</p>
                </div>
        }
        <h3 className="ms-fontSize-32">{props.type === "account" ? "Entrar" : "Insira a senha"}</h3>
        <p className="error">
            {ErrorMessageLogin(props.type, props.error)}    
        </p>
        <TextField underlined placeholder={props.type === "account"? "E-mail ou Telefone" : "Senha"} errorMessage={props.error? " ": ""}/>
        <div style={{ margin: '15px 0px 40px' }}>
            <LinkRoute to="/recuperation/password">{`Esqueceu ${props.type === "account" ? "seu login?" : "sua senha?"}`}</LinkRoute>
        </div>
        <div style={{ textAlign: "right" }}>
            <PrimaryButton text="Próximo" />
        </div>
    </>
);

function ErrorMessageLogin(type: TypeRecuperation, erro: boolean | void):string{
    if(erro){
        if(type === "account"){
            return `O usuário informado não foi encontrado. Verifique se
            você digitou corretamente. Caso contrário, entre em
            contato com o seu administrador.`
        }else{
            return  "Sua conta ou senha está incorreta."
        }
    }else{
        return ""
    }
}

export default ContentLogin;
