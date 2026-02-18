import React, { useEffect, useRef, useState } from 'react';
import { Resizable } from 're-resizable';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  modalId: string;
  zIndex?: number;
  title?: string;
  bringToFront: () => void;
}

interface Position {
  x: number;
  y: number;
}

interface ModalSize {
  width: number;
  height: number;
}

export const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  children, 
  modalId, 
  zIndex = 50, 
  title = "앱" ,
  bringToFront
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 });
  const [modalSize, setModalSize] = useState<ModalSize>({ width: 600, height: 400 });

  const [isMaximized, setIsMaximized] = useState(false);


  useEffect(() => {

    /**
     * 마우스 이동 핸들러
     * @param e 마우스 이벤트
     * @returns 
     */
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      
      setPosition(prev => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY
      }));
      
      setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    bringToFront();
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  function handleMaximize() {
    setIsMaximized(!isMaximized);
  }

  useEffect(() => {
    if (isOpen && modalRef.current) {
      setTimeout(() => {
        modalRef.current?.classList.add('open');
      }, 10);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isMaximized) {
      setPosition({ x: 0, y: 0 });
      modalRef.current?.classList.add('maximized');
    }
    else{
      modalRef.current?.classList.remove('maximized');
    }
  }, [isMaximized]);

  if (!isOpen) return null;

  if(isMaximized){
    return(
      <div 
        ref={modalRef}
        className="modal-content maximized open" 
        style={{
          width: '100%',
          height: '100%'
        }}
        data-modal-id={modalId}
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          ref={headerRef}
          className="modal-header"
          onMouseDown={handleMouseDown}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div className="modal-controls">
            <div className="modal-control close" onClick={onClose}></div>
            <div className="modal-control minimize"></div>
            <div className="modal-control maximize" onClick={handleMaximize}></div>
          </div>
          <div className="modal-title">{title}</div>
          <div style={{ width: '60px' }}></div>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
      </div>
    )
  }
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
        zIndex,
        width: isMaximized ? '100%' : undefined,
        height: isMaximized ? '100%' : undefined
      }}
    >
      <Resizable
        size={modalSize}
        minWidth={300}
        minHeight={200}
        maxWidth={window.innerWidth - 100}
        maxHeight={window.innerHeight - 100}
        onResize={(e, direction, ref, delta) => {
          const newWidth = ref.style.width ? parseInt(ref.style.width) : modalSize.width + delta.width;
          const newHeight = ref.style.height ? parseInt(ref.style.height) : modalSize.height + delta.height;
          
          setModalSize({
            width: newWidth,
            height: newHeight
          });
        }}
      >
      <div 
        ref={modalRef}
        className="modal-content open" 
        style={{
          width: '100%',
          height: '100%'
        }}
        data-modal-id={modalId}
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          ref={headerRef}
          className="modal-header"
          onMouseDown={handleMouseDown}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div className="modal-controls">
            <div className="modal-control close" onClick={onClose}></div>
            <div className="modal-control minimize"></div>
            <div className="modal-control maximize" onClick={handleMaximize}></div>
          </div>
          <div className="modal-title">{title}</div>
          <div style={{ width: '60px' }}></div>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
      </div>
      </Resizable>
    </div>
  );
};
