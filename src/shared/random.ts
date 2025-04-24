export const random = (min: number, max: number) => {
  if (min >= max) {
    throw new Error("[min]은 [max]보다 크거나 같을 수 없습니다.");
  }
};

export const uuidv4 = () => {
  return "jxxxxxx-newsxxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
