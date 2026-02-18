import React from 'react';
import { Modal } from 'components/atoms/Modal';
import { useModal } from 'context/ModalContext';

export const ModalRenderer: React.FC = () => {
  const { openModals, modalZIndex, closeModal, bringToFront, getModalTitle } = useModal();

  const modalContents: { [key: string]: React.ReactNode } = {
    profile: (
      <div onClick={() => bringToFront('profile')}>
        <h2>프로필</h2>
        <p>여기에 프로필 내용이 들어갑니다.</p>
      </div>
    ),
    skill: (
      <div onClick={() => bringToFront('skill')}>
        <h2>사용기술</h2>
        <p>여기에 사용기술 내용이 들어갑니다.</p>
      </div>
    ),
    history: (
      <div onClick={() => bringToFront('history')}>
        <h2>경력</h2>
        <p>여기에 경력 내용이 들어갑니다.</p>
      </div>
    ),
    github: (
      <div onClick={() => bringToFront('github')}>
        <h2>GitHub</h2>
        <p>여기에 GitHub 내용이 들어갑니다.</p>
      </div>
    ),
    tstory: (
      <div onClick={() => bringToFront('tstory')}>
        <h2>티스토리</h2>
        <p>여기에 티스토리 내용이 들어갑니다.</p>
      </div>
    )
  };

  return (
    <div className="relative w-full h-[calc(100vh-14rem)]">
      {Array.from(openModals).map(modalName => (
        <Modal
          key={modalName}
          isOpen={true}
          onClose={() => closeModal(modalName)}
          modalId={modalName}
          zIndex={modalZIndex[modalName] || 50}
          title={getModalTitle(modalName)}
          bringToFront={() => bringToFront(modalName)}
        >
          {modalContents[modalName]}
        </Modal>
      ))}
    </div>
  );
};
