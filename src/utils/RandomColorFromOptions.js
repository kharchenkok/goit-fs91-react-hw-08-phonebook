const colorPickerOptions = [
  { label: 'yellow', color: '#faae20' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'pink', color: '#E91E63' },
];

export function getRandomColorFromOptions() {
  const randomIndex = Math.floor(Math.random() * colorPickerOptions.length);
  return colorPickerOptions[randomIndex].color;
}
