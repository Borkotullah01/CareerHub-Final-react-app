const getStoredIds = () => {
    const storedIds = localStorage.getItem('Applied-Jobs');
    if (storedIds) {
        return JSON.parse(storedIds)
    }
    return [];
}

const saveIds = id => {
    const storedIds = getStoredIds();
    const exist = storedIds.find(jobid=> jobid === id);
    if (!exist) {
        storedIds.push(id)
        localStorage.setItem('Applied-Jobs', JSON.stringify(storedIds))
    }
}

export { getStoredIds, saveIds }