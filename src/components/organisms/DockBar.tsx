import Icon from 'components/atoms/Icon';
import { DockbarIcon } from 'components/molecules/dockbarIcon/DockbarIcon';
import React from 'react';
import { useModal } from 'context/ModalContext';

export const DockBar : React.FC = () => {
    const { openModal } = useModal();

    return (
        <div className="dock-bar-container">
        <div className="dock-bar">
            <DockbarIcon 
                category="dockbar" 
                name="ic_profile" 
                label="프로필"
                onClick={() => openModal('profile')}
            />
            <DockbarIcon 
                category='dockbar'
                name='ic_skill'
                label='사용기술'
                onClick={() => openModal('skill')}
            />
            <DockbarIcon 
                category='dockbar'
                name='ic_history'
                label='경력'
                onClick={() => openModal('history')}
            />
            <div className="divider"></div>
            <DockbarIcon 
                category='dockbar'
                name='ic_github'
                label='Git Hub'
                onClick={() => openModal('github')}
            />
            <DockbarIcon 
                category='dockbar'
                name='ic_tstory'
                label='티스토리'
                onClick={() => openModal('tstory')}
            />
        </div>
        </div>
    )
}