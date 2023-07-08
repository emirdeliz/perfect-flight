export const playMp3 = (filePath: string) => {
  new Audio(filePath).play();
} 