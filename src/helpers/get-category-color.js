const categoryColorMap = new Map();

categoryColorMap.set('Networking', 'orange');
categoryColorMap.set('Devops', 'blue');
categoryColorMap.set('Kubernetes', 'green')

const getCategoryColor = (category) => {
    return categoryColorMap.get(category);
};

export default getCategoryColor;