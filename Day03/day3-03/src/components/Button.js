import React from 'react';
import classNames from 'classnames';
import './Button.scss';

//className={'Button ${size}'}
function Button({children, size, color, outline, fullWidth}){
    //return <button className={['Button', size].join(' ')}>{children}</button>;
    return <button className={classNames('Button', size, color, {outline, fullWidth})}>{children}</button>;
}

/*
    classNames 라이브러리

    classNames("Button", "Size");   //className="Button Size"
    classNames("Button", {Size: true}); //className="Button Size"
    classNames("Button-Size": false);   //className=""
    classNames({Button: true}, {Size: true});   //className="Button Size"
    classNames({Button: true, Size: true}) ;    //className="Button Size"
*/
Button.defaultProps = {
    size: 'medium',
    color: 'blue'
};

export default Button;