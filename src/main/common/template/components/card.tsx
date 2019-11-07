import React, { ReactNode, Fragment } from 'react';

import { Card as CardUI } from '@uifabric/react-cards';
import {
    Stack,
} from 'office-ui-fabric-react';

const Card = (props: ICardProps) => (
    <Stack horizontal >
        <CardUI className="card">
            <CardUI.Item>
                {props.logo? Logo() : <Fragment />}
                {props.children}
            </CardUI.Item>
        </CardUI>
    </Stack>
);

interface ICardProps {
    children: ReactNode,
    logo?: boolean
}

function Logo() {
    return (
        <div style={{ textAlign: "center" }}>
            <img src="http://romasofttecnologia.com.br/mails/imagens/m4/logo.png" alt="logo Romasoft" />
        </div>
    )
}

export default Card;
