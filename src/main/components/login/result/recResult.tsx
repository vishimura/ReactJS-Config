import * as React from 'react'
import { Link } from 'react-router-dom'

import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { DefaultButton } from 'office-ui-fabric-react';
import { Link as LinkOfficeUI } from 'office-ui-fabric-react/lib/Link';

import { TypeResult, TypeRecuperation} from '../interface/types'

interface Props {
    typeResult: TypeResult,
    typeRecuperation: TypeRecuperation
}

function renderMessageResult(type: TypeResult, typeRecuperation: TypeRecuperation): JSX.Element {
    if (type === 'success') {
        return <p>Foi enviado um e-mail com as instruções de recuperação
                    sua {typeRecuperation === "account" ? "conta" : "senha"} para rsi*******************@rom****
                    <br />  <br />
            Verifique sua caixa de entrada e lixo eletrônico.
                    <br /><br />
            Caso não tenha recebido as instruções, por favor entre em
            contato com nossa
                    <LinkOfficeUI href="#"> central de relacionamento</LinkOfficeUI>.
                </p>
    } else {
        return <p>Entre em contato com o administrador do sistema, ou com nossa central de relacionamento.</p>
    }
}

const recResult = (props: Props) :JSX.Element => {
    const { typeResult, typeRecuperation } = props
    return (
        <>
            <h3 className="ms-fontSize-32">Recuperar {typeRecuperation === "account" ? "conta" : "senha"}</h3>
            <div className="centerH " >
                <Icon iconName={typeResult === "success" ? "completed" : "ErrorBadge"} className={typeResult === "success" ? "iconSuccess" : "iconError"} />
                <p className={typeResult} style={{ padding: 10 }}>
                    {
                        typeResult === "success"
                            ?
                            "E-mail enviado com sucesso !"
                            :
                            "Não foi possível identificar suas credenciais."
                    }
                </p>
            </div>
            <div>
                {renderMessageResult(typeResult, typeRecuperation)}
            </div>
            <div style={{ textAlign: "right" }}>
                <Link to="/">
                    <DefaultButton text="Ok" />
                </Link>
            </div>
        </>
    )
}

export default recResult