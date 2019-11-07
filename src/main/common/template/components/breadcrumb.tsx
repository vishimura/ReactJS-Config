import React from 'react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { render } from 'react-dom';

interface item {
    iconName?: string,
    page: string,
    link?: string,
}

interface IBreadcrumbProps {
    items: item[]
}

const Breadcrumb = (props: IBreadcrumbProps): JSX.Element => {
    function renderItems() {
        return props.items.map((item, i) => {
            if ((props.items.length -1) !== i)
                return <li key={i}><a href={item.link}><Icon iconName={item.iconName} className="iconBreadcrumb" />{item.page}</a><Icon iconName="ChevronRightMed" /></li>
            else
                return <li key={i}><Icon iconName={item.iconName} className="iconBreadcrumb" />{item.page}</li>
        })
    }
    return (
        <ul className="breadcrumb">
            {renderItems()}
        </ul>
    );
}
export default Breadcrumb;
