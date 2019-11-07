import React from 'react';

import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import CalendarFeed from './feed'

const Content = () => {
    return (
        <div className="conteudo">
            <div className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg9" style={{ padding: 40 }}>
                        <h3>Olá Romualdo Siqueira</h3>
                        <p style={{ color: '#606A70' }}>Seja bem vindo ao Romasoft Jurídico</p>
                        <div style={{ paddingTop: 40, display: 'flex' }}>
                            <div className="actions">
                                <Icon iconName="HomeSolid" />
                                <p>Nova consulta    </p>
                            </div>
                            <div className="actions">
                                <Icon iconName="HomeSolid" />
                                <p>Nova consulta    </p>
                            </div>
                            <div className="actions">
                                <Icon iconName="HomeSolid" />
                                <p>Nova consulta    </p>
                            </div>
                            <div className="actions">
                                <Icon iconName="HomeSolid" />
                                <p>Nova consulta    </p>
                            </div>
                            <div className="actions">
                                <Icon iconName="HomeSolid" />
                                <p>Nova consulta    </p>
                            </div>
                        </div>
                        <div style={{ paddingTop: 40 }}>
                            <SearchBox
                                placeholder="Pesquisar usuário ou processo"
                                onSearch={newValue => console.log('value is ' + newValue)}
                                onFocus={() => console.log('onFocus called')}
                                onBlur={() => console.log('onBlur called')}
                                onChange={() => console.log('onChange called')}
                            />
                        </div>
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg3">
                        <CalendarFeed dateRangeType={0} autoNavigateOnSelection={true} showGoToToday={true} showMonthPickerAsOverlay={true}/>                        
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Content;
