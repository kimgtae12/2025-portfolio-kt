import Icon from 'components/atoms/Icon';
import { DockbarIcon } from 'components/molecules/dockbarIcon/DockbarIcon';
import React from 'react';
import { useModal } from 'context/ModalContext';
import { WEB_LINKS } from 'utils/mapping';

export const DockBar : React.FC = () => {
    const { openModal, restoreModal,minimizedModals } = useModal();

    const handleLinkWeb = (type : 'github' | 'tistory') => {
        window.open(WEB_LINKS[type]);
    }

    const appList = [
        {
            name: 'profile',
            label: '프로필',
            icon: 'ic_profile'
        },
        {
            name: 'skill',
            label: '사용기술',
            icon: 'ic_skill'
        },
        {
            name: 'history',
            label: '경력',
            icon: 'ic_history'
        }
    ]

    return (
        <div className="dock-bar-container">
        <div className="dock-bar">
            {appList.map((app) => (
                <DockbarIcon 
                    key={app.name}
                    category="dockbar" 
                    name={app.icon} 
                    label={app.label}
                    onClick={() => {
                        if(minimizedModals.has(app.name)) {
                            restoreModal(app.name)
                        } else {
                            openModal(app.name)
                        }
                    }}
                />
            ))}
            <div className="divider"></div>
            <DockbarIcon 
                category='dockbar'
                name='ic_github'
                label='Git Hub'
                onClick={() => handleLinkWeb('github')}
            />
            <DockbarIcon 
                category='dockbar'
                name='ic_tstory'
                label='티스토리'
                onClick={() => handleLinkWeb('tistory')}
            />
        </div>
        </div>
    )
}