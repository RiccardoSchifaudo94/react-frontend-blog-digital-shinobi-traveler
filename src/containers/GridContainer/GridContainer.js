import React from 'react';
import './GridContainer.css';
export default function GridContainer({children,...restProps}) {
    return (
        <div className="dst_grid_container" {...restProps}>
            {children}
        </div>
    )
}
GridContainer.Container = ({children, type="default", ...restProps}) =>{
    switch(type){
        case "default":
        return(
                <div className={`dst_grid_container`} {...restProps}>
                    {children}
                </div>
        );
        break;
        case "fullwidth":
            return(
                    <div {...restProps}>
                        {children}
                    </div>
            );
        break;
        default:
            return(
                <div className={`dst_container`} {...restProps}>
                    {children}
                </div>
            );  
        break;
    }
}
GridContainer.Row = ({children,...restProps}) =>{
    return <div className="dst_grid_row" {...restProps}>{children}</div>
}
GridContainer.Col = ({children, size=12, ...restProps}) =>{
    return <div className={`dst_grid_col_${size}`} {...restProps}>
        {children}
    </div>
}