import React from 'react';
import Button from '@material-ui/core/Button';

import icon_ticket from '../../resources/images/icons/ticket.png';

const ReusableButton = (props) => {
    return (
        <Button
            href={props.link}
            variant="contained"
            size={ props.size ? props.size: 'large' }
            style={{
                background: '#8E8E8E',
                color: '#FFFFFF',
                ...props.style
            }}
        
        >
            { props.iconTicket ?
            <img
                src={icon_ticket}
                className="iconImage"
                alt="icon_button"
            />
             : null }
            {props.text}
        </Button>
    )
}

export default ReusableButton;
