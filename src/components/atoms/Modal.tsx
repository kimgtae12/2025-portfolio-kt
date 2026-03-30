import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Resizable } from 're-resizable';
import { WindowId } from 'data/portfolioData';
import { WindowState } from 'context/ModalContext';

interface ModalProps {
  modalId: WindowId;
  title: string;
  accent: string;
  description: string;
  state: WindowState;
  isActive: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  onPositionChange: (position: { x: number; y: number }) => void;
  onSizeChange: (size: { width: number; height: number }) => void;
  children: React.ReactNode;
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export const Modal: React.FC<ModalProps> = ({
  modalId,
  title,
  accent,
  description,
  state,
  isActive,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onPositionChange,
  onSizeChange,
  children,
}) => {
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!isDragging || state.isMaximized) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      const maxX = Math.max(window.innerWidth - state.size.width - 24, 24);
      const maxY = Math.max(window.innerHeight - state.size.height - 124, 56);

      onPositionChange({
        x: clamp(event.clientX - dragOffsetRef.current.x, 24, maxX),
        y: clamp(event.clientY - dragOffsetRef.current.y, 52, maxY),
      });
    };

    const handleUp = () => setIsDragging(false);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [isDragging, onPositionChange, state.isMaximized, state.size.height, state.size.width]);

  const frameStyle = useMemo<React.CSSProperties>(() => {
    if (state.isMaximized) {
      return {
        left: 16,
        top: 56,
        width: window.innerWidth - 32,
        height: window.innerHeight - 148,
      };
    }

    return {
      left: state.position.x,
      top: state.position.y,
      width: state.size.width,
      height: state.size.height,
    };
  }, [state.isMaximized, state.position.x, state.position.y, state.size.height, state.size.width]);

  if (!state.isOpen || state.isMinimized) {
    return null;
  }

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className={`window-frame ${isActive ? 'is-active' : 'is-inactive'} ${state.isMaximized ? 'is-maximized' : ''}`}
      exit={{ opacity: 0, scale: 0.98, y: 16 }}
      initial={{ opacity: 0, scale: 0.97, y: 28 }}
      onMouseDown={onFocus}
      style={{ ...frameStyle, zIndex: state.zIndex }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {state.isMaximized ? (
        <div className="window-shell">
          <div
            className="window-header"
            onDoubleClick={onMaximize}
            onMouseDown={(event) => {
              const target = event.target as HTMLElement;

              if (target.closest('button')) {
                return;
              }

              onFocus();
            }}
            style={{ '--accent-color': accent } as React.CSSProperties}
          >
            <div className="window-header__controls">
              <button aria-label={`${title} 닫기`} className="window-control is-close" onClick={onClose} type="button" />
              <button
                aria-label={`${title} 최소화`}
                className="window-control is-minimize"
                onClick={onMinimize}
                type="button"
              />
              <button
                aria-label={`${title} 최대화`}
                className="window-control is-maximize"
                onClick={onMaximize}
                type="button"
              />
            </div>

            <div className="window-header__title-group">
              <strong>{title}</strong>
              <span>{description}</span>
            </div>

            <div className="window-header__meta mono">{modalId.toUpperCase()}</div>
          </div>

          <div className="window-body">{children}</div>
        </div>
      ) : (
        <Resizable
          enable={{
            top: true,
            right: true,
            bottom: true,
            left: true,
            topRight: true,
            bottomRight: true,
            bottomLeft: true,
            topLeft: true,
          }}
          maxHeight={window.innerHeight - 156}
          maxWidth={window.innerWidth - 48}
          minHeight={360}
          minWidth={420}
          onResizeStop={(_, __, ref) => {
            onSizeChange({
              width: ref.offsetWidth,
              height: ref.offsetHeight,
            });
          }}
          size={state.size}
          style={{ width: '100%', height: '100%' }}
        >
          <div className="window-shell">
            <div
              className="window-header"
              onDoubleClick={onMaximize}
              onMouseDown={(event) => {
                if (state.isMaximized) {
                  return;
                }

                const target = event.target as HTMLElement;

                if (target.closest('button')) {
                  return;
                }

                setIsDragging(true);
                dragOffsetRef.current = {
                  x: event.clientX - state.position.x,
                  y: event.clientY - state.position.y,
                };
                onFocus();
              }}
              style={{ '--accent-color': accent } as React.CSSProperties}
            >
              <div className="window-header__controls">
                <button aria-label={`${title} 닫기`} className="window-control is-close" onClick={onClose} type="button" />
                <button
                  aria-label={`${title} 최소화`}
                  className="window-control is-minimize"
                  onClick={onMinimize}
                  type="button"
                />
                <button
                  aria-label={`${title} 최대화`}
                  className="window-control is-maximize"
                  onClick={onMaximize}
                  type="button"
                />
              </div>

              <div className="window-header__title-group">
                <strong>{title}</strong>
                <span>{description}</span>
              </div>

              <div className="window-header__meta mono">{modalId.toUpperCase()}</div>
            </div>

            <div className="window-body">{children}</div>
          </div>
        </Resizable>
      )}
    </motion.div>
  );
};
