import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { desktopWindows, WindowId } from "data/portfolioData";

export interface WindowState {
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

type WindowMap = Record<WindowId, WindowState>;

interface ModalContextType {
  windows: WindowMap;
  activeWindowId: WindowId | null;
  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  minimizeWindow: (id: WindowId) => void;
  restoreWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  toggleMaximizeWindow: (id: WindowId) => void;
  updateWindowPosition: (
    id: WindowId,
    position: { x: number; y: number },
  ) => void;
  updateWindowSize: (
    id: WindowId,
    size: { width: number; height: number },
  ) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const MIN_Z_INDEX = 20;

const getCenteredPosition = (size: { width: number; height: number }) => {
  if (typeof window === "undefined") {
    return { x: 200, y: 88 };
  }

  const horizontalPadding = 24;
  const topOffset = 52;
  const bottomReserved = 124;

  const maxX = Math.max(
    window.innerWidth - size.width - horizontalPadding,
    horizontalPadding,
  );
  const maxY = Math.max(
    window.innerHeight - size.height - bottomReserved,
    topOffset,
  );

  return {
    x: Math.min(
      Math.max((window.innerWidth - size.width) / 2, horizontalPadding),
      maxX,
    ),
    y: Math.min(
      Math.max((window.innerHeight - size.height) / 2, topOffset),
      maxY,
    ),
  };
};

const createInitialWindows = (): WindowMap =>
  desktopWindows.reduce((acc, windowConfig, index) => {
    const isInitialProfileWindow = windowConfig.id === "resume";

    acc[windowConfig.id] = {
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: MIN_Z_INDEX + index,
      position: isInitialProfileWindow
        ? getCenteredPosition(windowConfig.defaultSize)
        : windowConfig.defaultPosition,
      size: windowConfig.defaultSize,
    };

    return acc;
  }, {} as WindowMap);

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [windows, setWindows] = useState<WindowMap>(createInitialWindows);
  const [activeWindowId, setActiveWindowId] = useState<WindowId | null>(null);

  const bringToFront = useCallback(
    (id: WindowId, nextState?: Partial<WindowState>) => {
      setWindows((prev) => {
        const nextZIndex =
          Math.max(
            ...Object.values(prev).map((windowState) => windowState.zIndex),
          ) + 1;

        return {
          ...prev,
          [id]: {
            ...prev[id],
            ...nextState,
            zIndex: nextZIndex,
          },
        };
      });

      setActiveWindowId(id);
    },
    [],
  );

  const openWindow = useCallback(
    (id: WindowId) => {
      bringToFront(id, {
        isOpen: true,
        isMinimized: false,
      });
    },
    [bringToFront],
  );

  const closeWindow = useCallback((id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: false,
        isMinimized: false,
      },
    }));

    setActiveWindowId((prev) => (prev === id ? null : prev));
  }, []);

  const minimizeWindow = useCallback((id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMinimized: true,
      },
    }));

    setActiveWindowId((prev) => (prev === id ? null : prev));
  }, []);

  const restoreWindow = useCallback(
    (id: WindowId) => {
      bringToFront(id, {
        isOpen: true,
        isMinimized: false,
      });
    },
    [bringToFront],
  );

  const focusWindow = useCallback(
    (id: WindowId) => {
      if (!windows[id].isOpen || windows[id].isMinimized) {
        restoreWindow(id);
        return;
      }

      bringToFront(id);
    },
    [bringToFront, restoreWindow, windows],
  );

  const toggleMaximizeWindow = useCallback(
    (id: WindowId) => {
      bringToFront(id, {
        isMaximized: !windows[id].isMaximized,
        isMinimized: false,
      });
    },
    [bringToFront, windows],
  );

  const updateWindowPosition = useCallback(
    (id: WindowId, position: { x: number; y: number }) => {
      setWindows((prev) => ({
        ...prev,
        [id]: {
          ...prev[id],
          position,
        },
      }));
    },
    [],
  );

  const updateWindowSize = useCallback(
    (id: WindowId, size: { width: number; height: number }) => {
      setWindows((prev) => ({
        ...prev,
        [id]: {
          ...prev[id],
          size,
        },
      }));
    },
    [],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const keyMap: Record<string, WindowId> = {
        "1": "projects",
        "2": "about",
        "3": "skills",
        "4": "resume",
        "5": "contact",
        // "6": "archive",
      };

      if ((event.metaKey || event.ctrlKey) && keyMap[event.key]) {
        event.preventDefault();
        openWindow(keyMap[event.key]);
      }

      if (event.key === "Escape" && activeWindowId) {
        closeWindow(activeWindowId);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeWindowId, closeWindow, openWindow]);

  const value = useMemo(
    () => ({
      windows,
      activeWindowId,
      openWindow,
      closeWindow,
      minimizeWindow,
      restoreWindow,
      focusWindow,
      toggleMaximizeWindow,
      updateWindowPosition,
      updateWindowSize,
    }),
    [
      activeWindowId,
      closeWindow,
      focusWindow,
      minimizeWindow,
      openWindow,
      restoreWindow,
      toggleMaximizeWindow,
      updateWindowPosition,
      updateWindowSize,
      windows,
    ],
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
