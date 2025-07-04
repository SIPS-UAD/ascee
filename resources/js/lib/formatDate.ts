export const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date
        .toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        })
        .toUpperCase();
};
