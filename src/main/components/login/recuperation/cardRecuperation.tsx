import * as React from 'react';
import FormRec from './formRec'
import { match } from 'react-router';
import { TypeRecuperation} from '../interface/types'

interface ICardRecuperationProps<Params extends { [K in keyof Params]?: string } = {}>{
    match: match<Params>;
}

type TParams = {
    type: string
}

export default class CardRecuperation extends React.Component<ICardRecuperationProps<TParams>> {
    public render(): JSX.Element {
        const typeParam = this.props.match.params.type
        return (
            <>
            {typeParam === 'account' ? <FormRec type={TypeRecuperation.account}/> : <FormRec type={TypeRecuperation.password}/>}
           </>
        );
    }
}