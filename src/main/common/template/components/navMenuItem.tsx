import React, {Fragment} from 'react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

interface InavMenuItemProps{
    iconName: string,
    qntBadge?: number
}

const navMenuItem = (props: InavMenuItemProps) => (
    <div className="nav-menu-item" onClick={() => alert("teste")}>
        <Icon iconName={props.iconName} />
        {props.qntBadge? <span className="badge">{props.qntBadge}</span> : <Fragment/>}
        
    </div>
);

export default navMenuItem;
