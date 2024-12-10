function getStyles(markDef) {
    let styles = '';

    for (const [property, value] of Object.entries(markDef)) {
        // Convert camelCase to kebab-case
        const cssProperty = property.replace(/([A-Z])/g, '-$1').toLowerCase();
        styles += `${cssProperty}: ${value}; `;
    }

    return styles.trim();
}
