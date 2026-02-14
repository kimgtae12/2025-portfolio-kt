import React, { useState, useEffect } from 'react';

export const useGetNowTime = () => {
    const [currentTime, setCurrentTime] = useState<string>('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            
            const formattedTime = `${month}월 ${day}일 ${hours}:${minutes}`;
            setCurrentTime(formattedTime);
        };

        updateTime(); // 즉시 실행
        const interval = setInterval(updateTime, 1000); // 1초마다 업데이트

        return () => clearInterval(interval); // 클린업
    }, []);

    return currentTime;
};