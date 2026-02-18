import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalState {
  openModals: Set<string>;
  minimizedModals: Set<string>;
  modalZIndex: { [key: string]: number };
}

interface ModalContextType {
  openModals: Set<string>;
  minimizedModals: Set<string>;
  modalZIndex: { [key: string]: number };
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
  minimizeModal: (modalName: string) => void;
  restoreModal: (modalName: string) => void;
  bringToFront: (modalName: string) => void;
  getModalTitle: (modalName: string) => string;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [openModals, setOpenModals] = useState<Set<string>>(new Set());
  const [minimizedModals, setMinimizedModals] = useState<Set<string>>(new Set());
  const [modalZIndex, setModalZIndex] = useState<{ [key: string]: number }>({});

  const openModal = (modalName: string) => {
    setOpenModals(prev => new Set(prev).add(modalName));
    setModalZIndex(prev => ({
      ...prev,
      [modalName]: Math.max(...Object.values(prev), 50) + 10
    }));
  };

  const closeModal = (modalName: string) => {
    setOpenModals(prev => {
      const newSet = new Set(prev);
      newSet.delete(modalName);
      return newSet;
    });
  };

  const minimizeModal = (modalName: string) => {
    setMinimizedModals(prev => new Set(prev).add(modalName));
  };

  const restoreModal = (modalName: string) => {
    setMinimizedModals(prev => {
      const newSet = new Set(prev);
      newSet.delete(modalName);
      return newSet;
    });
    bringToFront(modalName);
  };

  const bringToFront = (modalName: string) => {
    setModalZIndex(prev => ({
      ...prev,
      [modalName]: Math.max(...Object.values(prev)) + 10
    }));
  };

  const getModalTitle = (modalName: string) => {
    const titles: { [key: string]: string } = {
      profile: '프로필',
      skill: '사용 기술',
      history: '경력',
      github: 'GitHub',
      tstory: '티스토리 블로그'
    };
    return titles[modalName] || '앱';
  };

  return (
    <ModalContext.Provider value={{
      openModals,
      minimizedModals,
      modalZIndex,
      openModal,
      closeModal,
      minimizeModal,
      restoreModal,
      bringToFront,
      getModalTitle
    }}>
      {children}
    </ModalContext.Provider>
  );
};
