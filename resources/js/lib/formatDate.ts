export const formatDate = (dateInput: string | Date | null | undefined): string => {
    try {
        // Handle null/undefined
        if (!dateInput) {
            return '-';
        }

        // If it's already a Date object
        const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
        
        // Check if date is valid
        if (isNaN(date.getTime())) {
            // Try parsing common formats like DD-MM-YYYY
            if (typeof dateInput === 'string' && dateInput.includes('-')) {
                const parts = dateInput.split('-');
                // Check if it might be DD-MM-YYYY format
                if (parts.length === 3 && parts[0].length === 2) {
                    const newDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
                    if (!isNaN(newDate.getTime())) {
                        return newDate.toLocaleDateString('id-ID', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                        }).toUpperCase();
                    }
                }
            }
            return '-';
        }

        // Format valid date
        return date.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        }).toUpperCase();
    } catch (error) {
        console.error('Error formatting date:', dateInput, error);
        return '-';
    }
};
