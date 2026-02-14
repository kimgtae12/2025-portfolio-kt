import Icon from 'components/atoms/Icon';
import { DockbarIcon } from 'components/molecules/dockbarIcon/DockbarIcon';
import React from 'react';
export const DockBar : React.FC = () => {

    return(
        <div className="dock-bar">
            <DockbarIcon 
                category="dockbar" 
                name="ic_profile" 
                label="프로필"
            />
            <DockbarIcon 
                category='dockbar'
                name='ic_skill'
                label='사용기술'
            />
            <DockbarIcon 
                category='dockbar'
                name='ic_history'
                label='경력'
            />
        </div>
    )

}