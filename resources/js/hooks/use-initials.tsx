import { useCallback } from 'react';

export function useInitials() {
    return useCallback((name?: string) => {
        if (!name) return '?'; // Return a placeholder for undefined names

        return name
            .trim()
            .split(' ')
            .map((part) => part[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);
    }, []);
}
