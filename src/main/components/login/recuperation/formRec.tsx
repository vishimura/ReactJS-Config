import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { PrimaryButton } from 'office-ui-fabric-react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';

import { TypeRecuperation } from '../interface/types'
import Card from '../../../common/template/components/card'

interface IDatePickerProps {
    type: TypeRecuperation;
}

interface IDatePickerFormatExampleState {
    value?: Date | null;
}

export default class FormRec extends Component<IDatePickerProps, IDatePickerFormatExampleState>{
    constructor(props: IDatePickerProps) {
        super(props)
        this.state = {
            value: null
        }
    }

    private _onFormatDate = (date: Date | null | undefined): string => {
        if (date)
            return `${this.formatDate(date.getDate())}/${this.formatDate((date.getMonth() + 1))}/${date.getFullYear() % 100}`;
        else
            return ''
    };

    private formatDate(date: Number): string {
        return `${date < 10 ? '0' + date : date}`
    }

    private _onSelectDate = (date: Date | null | undefined): void => {
        this.setState({ value: date });
      };

    private _onParseDateFromString = (value: string): Date => {
        const date = this.state.value || new Date();
        const values = (value || '').trim().split('/');
        const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
        const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
        let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
        if (year < 100) {
            year += date.getFullYear() - (date.getFullYear() % 100);
        }
        return new Date(year, month, day);
    };

    private renderFormAccount(value: Date | null | undefined, type: string): JSX.Element {
        return <>
            <h3 className="ms-fontSize-32">Recuperar Conta</h3>
            <p>
                Para recuperar sua conta, informe seus dados cadastrais e os
                caracteres na imagem abaixo.
            </p>
            <TextField underlined placeholder="CPF" type="number" required />
            <DatePicker
                isRequired={true}
                allowTextInput={true}
                underlined
                strings={DayPickerStrings}
                placeholder="Data de Nascimento"
                onSelectDate={this._onSelectDate}
                value={value!}
                formatDate={this._onFormatDate}
                parseDateFromString={this._onParseDateFromString}
            />
        </>
    }

    private renderFormPassword(): JSX.Element {
        return <>
            <h3 className="ms-fontSize-32">Recuperar Senha</h3>
            <p>Para recuperar sua senha, informe os caracteres na imagem abaixo.</p>
            <p>captcha</p>
        </>
    }
    render() {

        const { type } = this.props;
        return (
            <Card logo>
                {type === 'account' ? this.renderFormAccount(this.state.value, type) : this.renderFormPassword()}
                <div style={{ textAlign: "right", marginTop: 20 }}>
                    <Link to="/">
                        <PrimaryButton text="Voltar" className="invertedButtonPrimary" />
                    </Link>
                    <Link to={`/recuperation/result/${type === 'account' ? 'account' : 'password'}`}>
                        <PrimaryButton text="Próximo" />
                    </Link>
                </div>
            </Card>
        );
    }
}


const DayPickerStrings: IDatePickerStrings = {
    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],

    shortMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],

    days: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabádo'],

    shortDays: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],

    goToToday: '',
    prevMonthAriaLabel: 'Ir para o mês anterior:',
    nextMonthAriaLabel: 'Ir para o próximo mês:',
    prevYearAriaLabel: 'Ir para o ano anterior:',
    nextYearAriaLabel: 'Ir para o próximo ano:',
    closeButtonAriaLabel: 'Fechar calendário',
    isRequiredErrorMessage: 'Data de nascimento obrigatória',
    invalidInputErrorMessage: 'Formato de data inválido'
};

