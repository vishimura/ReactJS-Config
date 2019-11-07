import * as React from 'react';
import { match } from 'react-router';

import RecResult from './recResult'
import Card from '../../../common/template/components/card'

import { TypeResult, TypeRecuperation} from '../interface/types'

interface ICardRecResultProps<Params extends { [K in keyof Params]?: string } = {}> {
    match: match<Params>;
}

type TParams = {
    type: string
}

export default (props: ICardRecResultProps<TParams>) => {
        const typeParam = props.match.params.type
        return (
            <Card logo>
                {typeParam === 'account' ?
                    <RecResult typeRecuperation={TypeRecuperation.account} typeResult={TypeResult.success} />
                    :
                    <RecResult typeRecuperation={TypeRecuperation.password} typeResult={TypeResult.success} />
                }
            </Card>
        );
}