import React, { useState } from 'react';
import { Link as LinkRoute } from 'react-router-dom'

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton, IconButton } from 'office-ui-fabric-react';

import Card from '../../common/template/components/card'

export default () : JSX.Element => {
    const [isEmail, setIsEmail] = useState(false)
    document.body.id = 'login';
    
    function _loginEmail(): void {
        setIsEmail(true)
    }
    
    function _back(): void {
        setIsEmail(false)
    }
    
    function Password(): JSX.Element {
        const isErrorPassword: boolean = false;
        return (
            <>
                <div className="centerH" style={{ color: '#666666' }}>
                    <IconButton iconProps={{ iconName: 'back' }} title="Emoji" ariaLabel="Emoji" onClick={_back} />
                    <p>Roma Siqueira</p>
                </div>
                <h3 className="ms-fontSize-32">Insira a senha</h3>
                <p className="error">
                    {
                        isErrorPassword ?
                            "Sua conta ou senha está incorreta."
                            :
                            ""
                    }
                </p>
                <TextField underlined placeholder="Senha" errorMessage={isErrorPassword ? " " : ""} />
                <div style={{ margin: '15px 0px 40px' }}>
                    <LinkRoute to="/recuperation/password">Esqueceu sua senha?</LinkRoute>
                </div>
                <div style={{ textAlign: "right" }}>
                    <LinkRoute to="/home">
                        <PrimaryButton text="Próximo" />
                    </LinkRoute>
                </div>
            </>)
    }
    
    function Email(): JSX.Element {
        const isErrorEmail: boolean = false;
        return (
            <>
                <h3 className="ms-fontSize-32">Entrar</h3>
                <p className="error">
                    {
                        isErrorEmail ?
                            `O usuário informado não foi encontrado. Verifique se
                                você digitou corretamente. Caso contrário, entre em
                                contato com o seu administrador.`
                            :
                            ""
                    }
                </p>
                <TextField underlined placeholder="E-mail ou telefone" errorMessage={isErrorEmail ? " " : ""} />
                <div style={{ margin: '15px 0px 40px' }}>
                    <LinkRoute to="/recuperation/account">Esqueceu seu login?</LinkRoute>
                </div>
                <div style={{ textAlign: "right" }}>
                    <PrimaryButton text="Próximo" onClick={_loginEmail} />
                </div>
            </>
        )
    }
    
    return (
    <Card logo>
        {isEmail ? Password() : Email()}
    </Card>)
}